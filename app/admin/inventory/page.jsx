import Selleditem from "@/app/components/admin/selleditem";
import supabase from "@/app/supabase/supabase";
import Link from "next/link";
import { Basket } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FilterLeft } from "react-bootstrap-icons";
import { FilterRight } from "react-bootstrap-icons";

export default async function Inventory() {
    const { data, count } = await supabase.from("product_demo").select("*")    
    return (
        <div className="flex flex-col w-full" >
            <div>
                <h1 className="text-3xl font-semibold" >Inventory</h1>
                <p className="text-md -mt-1 font-light tracking-wider" >tempat mengatur barang anda </p>
            </div>
            <label htmlFor="search" className="flex items-center px-2 gap-2" >
                <input type="search" name="search" id="search" className="bg-zinc-50 px-0.5 w-70 rounded-md focus:border-zinc-950 font-medium transition py-2 text-md border-zinc-200 " placeholder="Cari Produk" />
                <FilterLeft className="text-3xl bg-zinc-50 shadow-xs shadow-zinc-950 rounded-md w-12 h-10" />
            </label>
            <div className="w-full h-30 bg-gray-500 px-6 py-4 relative rounded-xl mt-6 mb-3" >
                <h4 className="font-light text-xl text-zinc-50" > Total Barang </h4>
                <h1 className="text-6xl font-semibold text-zinc-50" > {data.length} </h1>
                <div className="absolute right-5 top-6 bg-gray-400 rounded-xl p-3" >
                    <Basket color="black" size={40} className="inline " />
                </div>
            </div>

            <div className="mt-3 px-3 flex gap-2 flex-col justify-center items-center" >
                {data.map(e => <Selleditem harga={e.harga} key={e.id} gambar={e.Product_image} nama={e.nama_barang} stok={1} Terjual={e.product_number} />)}
            </div>
            <Link href={"/admin/inventory/create"} > <button className="fixed bottom-5 right-4 bg-zinc-900 shadow-xs shadow-zinc-200 w-12 h-12 flex items-center justify-center text-6xl rounded-xl " > <Plus color="white" /> </button></Link>
        </div>
    )
}