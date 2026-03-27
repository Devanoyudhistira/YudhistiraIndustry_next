import { GraphUp } from "react-bootstrap-icons"
import Infocard from "../components/admin/infocard"
import Invoiceitem from "../components/admin/invoiceitem"
import { CurrencyDollar } from "react-bootstrap-icons"
import { CashCoin } from "react-bootstrap-icons"
import supabase from "../supabase/supabase"
import convertToMoney from "../function/convert"
import moment from "moment"

export default async function Admin() {
    const invoicedata = await supabase.from("invoice_new").select("*").limit(4).order("created_at", { ascending: false })
    const uangpembayaran = await supabase.from("invoice_new").select("pembayaran")
    var uang = uangpembayaran.data.reduce((acc, obj) => { return acc + parseFloat(obj.pembayaran); }, 0);
    const uangtotal = convertToMoney(uang)
    return (
        <>
            <div className="w-screen h-auto flex flex-col items-start px-3" >
                <h1 className="text-2xl font-extrabold" > Dashboard </h1>
                <h4 className="text-md font-medium text-zinc-900 tracking-wide" > pengelolaan toko [nama toko] pribadi </h4>
            </div>
            <div className="w-screen scrollbar scroll-smooth px-2 grid grid-flow-col gap-10 overflow-x-auto overflow-y-hidden h-auto py-2 " >
                <Infocard icon={<GraphUp size={30} className="text-green-500" />} invoname={"total pemasukan"} invovalue={uangtotal} />
                <Infocard icon={<CurrencyDollar size={30} className="text-green-500" />} invoname={"jumlah pembelian"} invovalue={invoicedata.data.length} />
                <Infocard icon={<CashCoin size={30} className="text-green-500" />} invoname={"barang terlaris"} invovalue={"yaris xl"} />
                <Infocard icon={<CurrencyDollar size={30} className="text-green-600" />} invoname={"total pengeluaran"} invovalue={"50.000.000"} />
            </div>
            <div className="flex flex-col gap-2 w-screen h-max px-2 bg-zinc-50 mt-4" >
                <h1 className="text-3xl font-extrabold  " > Pembelian terbaru </h1>
                {
                    invoicedata.data.map(e =>
                     <Invoiceitem namaitem={e.nama_barang} user={e.nama} tanggal={moment(e.created_at).format("HH-MM-YYYY")} key={e.orderid} status={e.status === "settlement" ? "lunas" : e.status} harga={e.pembayaran} />)}
            </div>
            <footer className="fixed bottom-0 left-0 w-screen h-20 bg-zinc-200 border-y-4" >
            </footer>
        </>
    )
}