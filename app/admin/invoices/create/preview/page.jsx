import Previewpage from "@/app/components/admin/previewpage"
import supabase from "@/app/supabase/supabase"

export default async function Preview({searchParams }){    
    const {id} = await searchParams
    const allid = id.split(" ")
    const {data} = await supabase.from("product_demo").select("id,harga,jumlah,nama_barang,Product_image").in("id",allid)
    console.log(data)
    return(
        <Previewpage data={data} />
        
    )

}