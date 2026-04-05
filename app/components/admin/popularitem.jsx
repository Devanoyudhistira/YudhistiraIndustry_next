import convertToMoney from "@/app/function/convert";
import truncate from "@/app/function/truncat";
import Image from "next/image";

export default function Popularitem({ nama, sold, harga, gambar,stock }) {
    return (
        <div className=" flex-none w-54 h-72 flex flex-col items-start justify-between bg-linear-to-t from-purple-50 to-purple-100 shadow-xs shadow-zinc-950/50 rounded-xl px-2 py-1" >
            <Image src={gambar} alt={nama} width={150} height={150} className="w-full object-cover object-center bg-black h-50 mt-2 rounded-xl" ></Image>
            <div className="w-full -mt-5 justify-between items-center flex" >
                <h1 className=" font-bold text-md capitalize tracking-wide" > {nama} </h1>
                <h2 className="text-md font-semibold" >{truncate(convertToMoney(harga), 10)}</h2>
            </div>
            <div className="flex w-full justify-between items-center" >
                <h5 className="text-[15px] font-medium" >{sold} Terjual</h5>
                <h5 className="text-[15px] font-medium" > {stock > 1 ? <span className="text-purple-600" > {stock} tersisa </span> : <span className="text-red-500" >Stock habis</span> } </h5>
            </div>
        </div>
    )
}