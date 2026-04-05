import Invoiceitem from "@/app/components/admin/invoiceitem";
import supabase from "@/app/supabase/supabase";
import { Filter } from "react-bootstrap-icons";
import moment from "moment";
import Emptyinventory from "@/app/components/admin/emptyinvoice";
import Navigation from "@/app/components/admin/navigation";
import logout from "@/app/actions/login/logout";

export default async function Invoice() {
    const { data } = await supabase.from("invoice_new").select("*").order("created_at", { ascending: false })
    const { data: pending } = await supabase.from("invoice_new").select("status").order("created_at", { ascending: false }).eq("status", "pending")
    return (
        <div className="pb-20 flex flex-col justify-center" >
            <div className="w-full flex flex-col gap-4" >
                <div className="w-[95%] self-center border-l-4 border-purple-600 flex flex-col items-start px-2 py-2 justify-center h-25 bg-linear-to-t from-purple-200 to-purple-100 rounded-2xl" >
                    <h1 className="text-xl font-semibold text-purple-950" >Total pembayaran </h1>
                    <h3 className="text-xl font-bold text-purple-900" > {data.length} </h3>
                </div>
                <div className="w-[95%] self-center  flex flex-col items-start px-2 py-2 justify-center h-25 bg-linear-to-t from-purple-200 to-purple-100 rounded-2xl" >
                    <h1 className="text-2xl font-semibold text-purple-950" > Pembayaran yang tertunda </h1>
                    <h3 className="text-xl font-bold text-purple-900" > {pending.length} </h3>
                </div>
            </div>
            {data.length > 0 &&
                <>
                    <div className="flex w-full px-3 justify-between" >
                        <h1 className="text-xl font-bold" >Data penjualan</h1>
                        {/* <button className="text-md bg-sky-200 px-2 py-0.5 rounded-md font-semibold flex gap-0.5 items-center" > <Filter />  Filter</button> */}
                    </div>
                    <div className="w-full items-center flex gap-3 justify-center mt-3 flex-col pl-3 " >
                        {data.map(e =>
                            <Invoiceitem namaitem={e.nama_barang} user={e.nama} tanggal={moment(e.created_at).format("HH-MM-YYYY")} key={e.orderid} status={e.status === "settlement" ? "lunas" : e.status} harga={e.pembayaran} />)}
                    </div>
                </>}

            {
                data.length < 1 && <Emptyinventory />
            }
            <Navigation logout={logout} />
        </div>
    )
}