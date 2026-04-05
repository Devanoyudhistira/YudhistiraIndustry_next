import Emptyinventory from "@/app/components/admin/emptyinventory";
import Selleditem from "@/app/components/admin/selleditem";
import Navigation from "@/components/admin/navigation"
import supabase from "@/app/supabase/supabase";
import Link from "next/link";
import { Basket } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FilterLeft } from "react-bootstrap-icons";
import { FilterRight } from "react-bootstrap-icons";
import logout from "@/app/actions/login/logout";

export default async function Inventory() {
    const { data, count } = await supabase.from("product_demo").select("*")
    return (
        <div className="flex flex-col w-full relative pb-35" >
            {data.length > 0 &&
                <>                
                    <div>
                        <h1 className="text-3xl font-semibold" >Inventory</h1>
                        <p className="text-md -mt-1 font-light tracking-wider" >tempat mengatur barang anda </p>
                    </div>
                    <label htmlFor="search" className="flex items-center px-2 gap-2" >
                        <input type="search" name="search" id="search" className="bg-zinc-50 px-0.5 w-70 rounded-md focus:border-zinc-950 font-medium transition py-2 text-md border-zinc-200 " placeholder="Cari Produk" />
                        <FilterLeft className="text-3xl bg-zinc-50 shadow-xs shadow-zinc-950 rounded-md w-12 h-10" />
                    </label>
                    <div className="w-full h-30 bg-linear-to-t from-purple-600 to-purple-500 px-6 py-4 relative rounded-xl mt-6 mb-3" >
                        <h4 className="font-light text-xl text-purple-100" > Total Barang </h4>
                        <h1 className="text-6xl font-semibold text-purple-50" > {data.length} </h1>
                        <div className="absolute right-5 top-6 bg-purple-400 text-purple-950 rounded-xl p-3" >
                            <Basket  size={40} className="inline " />
                        </div>
                    </div>
                    <div className="mt-3 px-3 flex gap-2 flex-col justify-center items-center" >
                        {data.map(e => <Selleditem id={e.id} harga={e.harga} key={e.id} gambar={e.Product_image.trimEnd()} nama={e.nama_barang} stok={e.jumlah} Terjual={e.product_number} />)}
                        
                    </div>
                </>}
            {
                data.length < 1 && <Emptyinventory/>
            }
            {
                data.length > 0 && <Link href={"/admin/inventory/create"} > <button className="fixed bottom-20 right-4 bg-linear-to-b from-purple-950 text-purple-100 to-purple-600 shadow-xs shadow-purple-200 w-12 h-12 flex items-center justify-center text-6xl rounded-xl " > <Plus /> </button></Link>
                }
                <Navigation logout={logout} />
        </div>
    )
}