import convertToMoney from "@/app/function/convert"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "react-bootstrap-icons"
import { Check2 } from "react-bootstrap-icons"
import { ArrowRight } from "react-bootstrap-icons"

import { Check } from "react-bootstrap-icons"
export default async function Successcreate({ params }) {
    const { slug } = await params

    const { data } = await supabase.from("product_demo").select("*").eq("id", slug).single()
    return (

        <div className="flex flex-col overflow-x-hidden px-1 items-center justify-evenly " >
            <div className="flex items-center justify-center rounded-xl bg-green-300 text-emerald-500" > <Check2 size={110} /> </div>
            <h1 className="text-2xl font-semibold " > Product Berhasil Di Buat </h1>
            <p className="text-md  text-center text-zinc-500" > produk anda yang bernama {data.nama_barang} sudah siap dijual </p>
            <Image alt={data.nama_barang} width={1000} height={1000} className="w-80 h-90 object-cover object-center rounded-xl" src={data.Product_image} />
            <section className="grid w-screen px-5 py-1 h-50 rounded-xl mt-5 bg-zinc-50 grid-cols-2  gap-3" >
                <div className="bg-sky-100/80 w-full h-max px-2 py-4 rounded-xl col-span-2 text-center" >
                    <h1 className="font-light text-2xl tracking-wider capitalize " > Nama Produk </h1>
                    <p className="font-semibold text-xl tracking-wide" >  {data.nama_barang} </p>
                </div>
                <div className="bg-sky-100/80 w-full h-max px-2 py-4 rounded-xl  text-center" >
                    <h1 className="font-light text-xl tracking-wider capitalize " > Harga Produk </h1>
                    <p className="font-semibold text-md tracking-wide" >  {convertToMoney(data.harga)} </p>
                </div>
                <div className="bg-sky-100/80 w-full h-max px-2 py-4 rounded-xl  text-center" >
                    <h1 className="font-light text-xl tracking-wider capitalize " > Stok Produk </h1>
                    <p className="font-semibold text-md tracking-wide" >  {data.jumlah} </p>
                </div>
            </section>
            <div className="w-full h-max px-2 py-1 flex flex-col gap-2" >
                <Link className="bg-zinc-950 w-full h-12 py-1 rounded-xl text-zinc-50 font-bold text-xl flex items-center justify-center gap-3 capitalize" href={"/admin/home"} > Kembali ke Menu <ArrowRight/> </Link>
                <Link className="bg-emerald-200 w-full h-12 py-1 rounded-xl text-zinc-950 font-bold text-xl flex items-center justify-center gap-1 capitalize" href={"/admin/inventory/create"}> Buat Produk Lagi <Plus size={40} /> </Link>                
            </div>
        </div>

    )
}