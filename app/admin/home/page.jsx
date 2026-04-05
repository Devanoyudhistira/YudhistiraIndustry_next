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
import { CreditCard } from "react-bootstrap-icons"
import Navigation from "@/app/components/admin/navigation"
import logout from "@/app/actions/login/logout"

export default async function Admin() {    
    const popularitem = await supabase.from("product_demo").select("*").order("product_number",{ascending:false}).limit(3)
    const invoicedata = await supabase.from("invoice_new").select("*").limit(3).order("created_at", { ascending: false })
    const uangpembayaran = await supabase.from("invoice_new").select("pembayaran").eq("status","settlement")
    var uang = uangpembayaran.data.reduce((acc, obj) => { return acc + parseFloat(obj.pembayaran); }, 0);
    const uangtotal = convertToMoney(uang)
    return (
        <div className="pb-18" >
            <div className="w-screen h-auto flex flex-col items-start px-3" >
                <h1 className="text-2xl font-extrabold" > Dashboard </h1>
                <h4 className="text-md font-medium text-zinc-900 tracking-wide" > pengelolaan toko [nama toko] pribadi </h4>
            </div>
            <div className="w-screen px-6 grid  grid-cols-2 gap-5 overflow-x-auto overflow-y-hidden h-auto py-2 " >
                <Infocard icon={<GraphUp size={20} className="text-purple-500" />} invoname={"total pemasukan"} invovalue={uangtotal} />
                <Infocard icon={<CreditCard size={20} className="text-purple-500" />} invoname={"jumlah pembelian"} invovalue={uangpembayaran.data.length} />
                <Infocard icon={<CashCoin size={20} className="text-purple-500" />} invoname={"barang terlaris"} invovalue={popularitem.data[0] ? popularitem.data[0].nama_barang : "belum ada"} />
                <Infocard icon={<CurrencyDollar size={20} className="text-purple-600" />} invoname={"total pengeluaran"} invovalue={"50.000.000"} />
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
            <div className="w-full mt-1 scrollbar h-max py-1 px-1 flex flex-col gap-2 shrink-0" >
                <div className="w-full flex justify-between px-2 items-center " >
                    <h1 className="text-xl font-semibold" >Barang Populer</h1>
                    <Link href={"/admin/inventory"} className="text-md font-medium " > lihat semua </Link>
                </div>
                <div className="flex gap-3 overflow-x-auto py-3" >          
                    {popularitem.data.map(e => <Popularitem key={e.id} gambar={e.Product_image.trimEnd()} nama={e.nama_barang} harga={e.harga} sold={e.product_number} stock={e.jumlah} /> )}                                                          
                </div>
            </div>
            <Navigation logout={logout} />
        </div>
    )
}