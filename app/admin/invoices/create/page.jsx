import Createinvoicepage from "@/app/components/admin/createinvoicepage";
import Invoicecreate from "@/app/components/admin/invoicecreate";
import supabase from "@/app/supabase/supabase";



export default async function Page() {
    const { data } = await supabase.from("product_demo").select("id,nama_barang,harga,jumlah,Product_image")
    return (
        <>
            <Createinvoicepage dataproduct={data} />
        </>
    )
}