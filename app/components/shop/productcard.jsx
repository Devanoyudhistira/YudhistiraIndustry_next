"use client"
import { Open_Sans, Inter } from "next/font/google"
import Image from "next/image"
const open = Open_Sans({})
const inter = Inter({})

export function Shopcard({ data }) {

    function convertToMoney(price) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    }


    return (
        <>
            {
                data.map(e =>
                    <div key={e.id} className="bg-zinc-100 flex flex-col items-center justify-evenly py-3 px-1.5 h-55 w-40 border-2 rounded-xl" >
                        <Image width={120} height={120} alt={e.nama_barang} loading="eager" src={e.Product_image} id="mockup-image" className="h-30 object-center object-cover w-full bg-black rounded-md " />
                        <div id="information" className="w-full h-10 flex justify-between items-center" >
                            <h1 className={inter.className + " text-md "}  > {e.nama_barang} </h1>
                            <h2 className={inter.className + " text-md"} > {convertToMoney(e.harga)} </h2>
                        </div>
                        <button className={"w-full px-3 py-1 bg-zinc-950  rounded-md  text-zinc-50 font-medium text-xl " + open.className} > purchase </button>
                    </div>)
            }
        </>
    )
}