import { GraphUp } from "react-bootstrap-icons"
import Infocard from "@/components/admin/infocard"
import Invoiceitem from "@/components/admin/invoiceitem"
import { CurrencyDollar } from "react-bootstrap-icons"
import { CashCoin } from "react-bootstrap-icons"
import supabase from "@/supabase/supabase"
import convertToMoney from "@/function/convert"
import moment from "moment"
import Link from "next/link"
import Popularitem from "@/app/components/admin/popularitem"

export default async function Admin() {
    const populerdata = await supabase.from("invoice_new").select("nama_barang")
    const invoicedata = await supabase.from("invoice_new").select("*").limit(3).order("created_at", { ascending: false })
    const uangpembayaran = await supabase.from("invoice_new").select("pembayaran")
    var uang = uangpembayaran.data.reduce((acc, obj) => { return acc + parseFloat(obj.pembayaran); }, 0);
    const uangtotal = convertToMoney(uang)    
    return (
        <>
            <div className="w-screen h-auto flex flex-col items-start px-3" >
                <h1 className="text-2xl font-extrabold" > Dashboard </h1>
                <h4 className="text-md font-medium text-zinc-900 tracking-wide" > pengelolaan toko [nama toko] pribadi </h4>
            </div>
            <div className="w-screen px-6 grid grid-rows-2 grid-cols-2 gap-10 overflow-x-auto overflow-y-hidden h-auto py-2 " >
                <Infocard icon={<GraphUp size={20} className="text-green-500" />} invoname={"total pemasukan"} invovalue={uangtotal} />
                <Infocard icon={<CurrencyDollar size={20} className="text-green-500" />} invoname={"jumlah pembelian"} invovalue={invoicedata.data.length} />
                <Infocard icon={<CashCoin size={20} className="text-green-500" />} invoname={"barang terlaris"} invovalue={"yaris xl"} />
                <Infocard icon={<CurrencyDollar size={20} className="text-green-600" />} invoname={"total pengeluaran"} invovalue={"50.000.000"} />
            </div>
            <div className="flex flex-col  gap-2 w-screen h-max px-2 py-1 mt-4" >
                <div className="w-full flex items-center justify-evenly " >
                    <h1 className="text-xl font-semibold mr-4 tracking wide" > Pembelian terbaru </h1>
                    <Link href={"#"} className="text-md font-medium ml-15 " > View all </Link>
                </div>
                {
                    invoicedata.data.map(e =>
                        <Invoiceitem namaitem={e.nama_barang} user={e.nama} tanggal={moment(e.created_at).format("HH-MM-YYYY")} key={e.orderid} status={e.status === "settlement" ? "lunas" : e.status} harga={e.pembayaran} />)}
            </div>
            <div className="w-full mt-1 overflow-x-auto scrollbar h-max py-1 px-1 flex flex-col gap-2 shrink-0" >
                <h1 className="text-xl font-semibold ml-1.5" >Barang Populer</h1>
                <div className="flex gap-3" >
                    <Popularitem />
                    <Popularitem />
                    <Popularitem />
                    <Popularitem />
                    <Popularitem />
                </div>
            </div>
        </>
    )
}