import convertToMoney from "@/app/function/convert";
import Image from "next/image";

export default function Selleditem({ nama, stok, Terjual, gambar, harga }) {
    return (
        <div className="w-full h-max  rounded-xl bg-zinc-50 shadow-xs  shadow-zinc-900 flex-col py-2" >
            <div className="w-full gap-2 px-2 flex justify-between" >
                <div className="w-max flex items-start gap-2 " >
                    <Image src={gambar} alt={nama} height={100} width={100} className="bg-black w-18 h-18 rounded-md object-center object-cover" />
                    <h1 className="text-xl font-semibold capitalize" > {nama} </h1>
                </div>
                <div className="bg-zinc-50  flex flex-col items-end justify-center gap-1" >
                    <h2 className="text-xs  font-medium bg-green-300 h-min w-max px-2 py-1 rounded-md" > In stock </h2>
                    <h4 className="font-semibold text-md" > {convertToMoney(harga)} </h4>
                </div>
            </div>
            <div className="w-full mt-2 px-2 flex justify-between items-center" >
                <div className="flex flex-col  items-center" >
                    <h1 className="text-xs font-medium" >Terjual</h1>
                    <p className="text-md -mt-1 font-semibold" >{Terjual} units </p>
                </div>
                <div className="flex flex-col gap-1  items-center" >
                    <h1 className="text-xs font-medium" >Stock</h1>
                    <p className="text-md -mt-1.5 font-semibold" >{stok} </p>
                </div>
            </div>
        </div>
    )
}