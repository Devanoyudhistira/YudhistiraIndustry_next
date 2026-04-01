import Invoiceitem from "@/app/components/admin/invoiceitem";
import supabase from "@/app/supabase/supabase";
import { Filter } from "react-bootstrap-icons";
import moment from "moment";
import Emptyinventory from "@/app/components/admin/emptyinvoice";
import Navigation from "@/app/components/admin/navigation";

export default async function Invoice() {
    const { data } = await supabase.from("invoice_new").select("*").order("created_at", { ascending: false })
    return (
        <div>
            {data.length > 0 &&
                <>
                    <div className="flex w-full px-3 justify-between" >
                        <h1 className="text-xl font-bold" >Data penjualan</h1>
                        <button className="text-md bg-sky-200 px-2 py-0.5 rounded-md font-semibold flex gap-0.5 items-center" > <Filter />  Filter</button>
                    </div>
                    <div className="w-full items-center flex gap-3 justify-center mt-3 flex-col pl-3 " >
                        {data.map(e =>
                            <Invoiceitem namaitem={e.nama_barang} user={e.nama} tanggal={moment(e.created_at).format("HH-MM-YYYY")} key={e.orderid} status={e.status === "settlement" ? "lunas" : e.status} harga={e.pembayaran} />)}
                    </div>
                </>}

            {
                data.length < 1 && <Emptyinventory/>
            }
            <Navigation/>
        </div>
    )
}