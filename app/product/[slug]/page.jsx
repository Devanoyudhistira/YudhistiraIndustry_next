import convertToMoney from "@/app/function/convert"
import { createClient } from "@/app/supabase/server"
import { Inter,Open_Sans } from "next/font/google"
import Image from "next/image"
const inter = Inter({})
const open = Open_Sans({})
export default async function productslug({ params }) {
    const { slug } = await params

    const supabase = await createClient()

    const { data } = await supabase.from("product_demo").select("*").eq("id", slug).single()
    console.log(data)


    return (
        <div className="w-full h-auto  flex flex-col justify-between items-center mt-15 relative" >
            <Image width={150} height={150} alt={data.nama_barang} className="w-90 h-90 -ml-4 rounded-md object-cover object-center" src={data.Product_image} />
            <div className="flex w-full justify-between px-3" >
                <h1 className={"text-xl font-bold " + open.className} > {data.nama_barang} </h1>
                <h1 className={"text-xl font-bold mr-2.5 " + open.className} > {convertToMoney(data.harga)} </h1>
            </div>
            <footer className="w-screen mt-42 flex items-center justify-center " >
                <button className={"w-[80%] h-auto py-2 bg-zinc-900 text-2xl text-white rounded-md focus:border-3 hover:border-3 transition focus:scale-95 focus:bg-zinc-100 tracking-wide focus:text-black hover:scale-95 hover:bg-zinc-100 hover:text-black font-bold " + open.className } > Purchase </button>
            </footer>
        </div>
    )
}