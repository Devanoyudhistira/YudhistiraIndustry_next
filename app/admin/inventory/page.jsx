import Selleditem from "@/app/components/admin/selleditem";
import supabase from "@/app/supabase/supabase";
import { FilterLeft } from "react-bootstrap-icons";
import { FilterRight } from "react-bootstrap-icons";

export default async function Inventory() {
    const {data} = await supabase.from("product_demo").select("*")
    return (
        <div className="flex flex-col w-full" >
            <div>
                <h1 className="text-3xl font-semibold" >Inventory</h1>
                <p className="text-md mt-2 font-light tracking-wider" >tempat mengatur barang anda </p>
            </div>
            <label htmlFor="search" className="flex items-center px-2 gap-2" >
                <input type="search" name="search" id="search" className="bg-zinc-50 w-70 rounded-md focus:border-zinc-950 font-medium transition py-2 text-md border-zinc-200 " placeholder="Cari Produk" />
                <FilterLeft className="text-3xl bg-zinc-50 shadow-xs shadow-zinc-950 rounded-md w-12 h-10" />
            </label>

            <div className="mt-3 px-6 flex gap-2 flex-col justify-center items-center" >
                { data.map(e => <Selleditem key={e.id} gambar={e.Product_image} nama={e.nama_barang} stok={1} Terjual={e.product_number} /> )}
            </div>

        </div>
    )
}