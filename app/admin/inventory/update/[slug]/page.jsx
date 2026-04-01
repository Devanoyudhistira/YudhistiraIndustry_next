import { update } from "@/app/actions/crud/crud";
import Formaction from "@/app/components/admin/formaction";
import supabase from "@/app/supabase/supabase";
import { Pen } from "react-bootstrap-icons";


export default async function Updateproduct({params}) {

    const { slug } = await params    

    const { data } = await supabase.from("product_demo").select("*").eq("id", slug).single()


    return (
        <div className=" scroll-smooth overflow-y-auto w-max  -mt-2" >
            <h1 className="text-2xl font-bold " >Product Image</h1>
            <Formaction message={"create"} icon={<Pen size={20} />} orignalid={data.id} originalimage={data.Product_image.trimEnd()} createaction={update} originaltext={data.nama_barang} originalprice={data.harga} originalstock={data.jumlah} originaldesc={data.description} />            
        </div>
    )
}