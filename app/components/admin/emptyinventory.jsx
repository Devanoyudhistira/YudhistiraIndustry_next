import Link from "next/link";
import { EmojiHeartEyesFill,Plus } from "react-bootstrap-icons";
import { Archive } from "react-bootstrap-icons";

export default function Emptyinventory(){
    return(
        <div className="flex flex-col w-screen items-center justify-center h-max py-4" >
            <Archive size={100} />
            <span className="inline-block w-30 h-1 rounded-full bg-gray-200" ></span>
            <div className="mt-10 w-full px-3 " >
                <h1 className="font-bold capitalize text-2xl text-center " > Saat ini belum ada Produk yang dijual </h1>                
            </div>
           <Link href={"/admin/inventory/create"} > <button className=" bg-linear-to-b from-zinc-950 to-zinc-600 shadow-xs font-semibold mt-5 shadow-zinc-200 w-70 h-12 flex items-center justify-center text-xl capitalize text-white rounded-xl " > Buat produk baru <Plus color="white" size={30} /> </button></Link>
        </div>
    )
}