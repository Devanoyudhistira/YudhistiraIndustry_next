"use server"

import supabase from "@/app/supabase/supabase"

export  async function POST(){

     const {data} = await supabase.from("product_demo").delete().eq("id","id nanti tak kasih")

}