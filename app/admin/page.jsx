import Infocard from "../components/admin/infocard"
import Invoiceitem from "../components/admin/invoiceitem"
import Navigation from "../components/admin/navigation"
import { createClient } from "../supabase/server"

export default async function Admin() {
    const supabase = await createClient()
    return (
        <>
            <div className="w-screen h-auto flex flex-col items-start px-3" >
                <h1 className="text-4xl font-extrabold" > Dashboard </h1>
                <h4 className="text-xl font-medium text-zinc-900 tracking-wide" > pengelolaan toko [nama toko] pribadi </h4>
            </div>
        <div className="w-screen scrollbar scroll-smooth px-2 grid grid-flow-col gap-10 overflow-x-auto overflow-y-hidden h-auto py-2 " >
            <Infocard invoname={"total pemasukan"} invovalue={"Rp.100.000.000"} />
            <Infocard invoname={"jumlah pembelian"} invovalue={"20"} />
            <Infocard invoname={"barang terlaris"} invovalue={"yaris xl"} />
            <Infocard invoname={"total pengeluaran"}  invovalue={"50.000.000"} />
        </div>
        <div className="flex flex-col gap-2 w-screen h-max px-2 bg-zinc-50 mt-4" >
            <h1 className="text-3xl font-extrabold  " > Pembelian terbaru </h1>
            <Invoiceitem/>
            <Invoiceitem/>
            <Invoiceitem/>
            <Invoiceitem/>
        </div>
        <footer className="fixed bottom-0 left-0 w-screen h-20 bg-zinc-200 border-y-4" >            
        </footer>
        </>
    )
}