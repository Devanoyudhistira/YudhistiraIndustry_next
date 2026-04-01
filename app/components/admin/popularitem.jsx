import convertToMoney from "@/app/function/convert";
import truncate from "@/app/function/truncat";
import Image from "next/image";

export default function Popularitem({nama,sold,harga,gambar}) {
    return (
        <div className=" flex-none w-54 h-72 flex flex-col items-start justify-between bg-zinc-50 shadow-xs shadow-zinc-950/50 rounded-xl px-2 py-1" >
            <Image src={gambar} alt={nama} width={150} height={150} className="w-full object-cover object-center bg-black h-50 mt-2 rounded-xl" ></Image>
            <h1 className="-mt-6 font-bold text-md capitalize tracking-wide" > {nama} </h1>
            <div className="flex w-full justify-between items-center" >
                <h5 className="text-[15px] font-medium" >{sold} Terjual</h5>
                <h2 className="text-[15px] font-semibold" >{truncate(convertToMoney(harga),10 )}</h2>
            </div>
        </div>
    )
}