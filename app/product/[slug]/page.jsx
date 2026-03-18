
import Productdetail from "@/app/components/shop/productdetail"
import Productpage from "@/app/components/shop/productpage"

import { createClient } from "@/app/supabase/server"

export default async function productslug({ params }) {
    const { slug } = await params

    const supabase = await createClient()

    const { data } = await supabase.from("product_demo").select("*").eq("id", slug).single()    


    return (
       <Productpage data={data} id={slug} />
    )
}