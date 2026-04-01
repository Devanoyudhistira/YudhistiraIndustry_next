"use client"
import { Open_Sans, Inter } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"
import Backdrop from "../backdrop"
import Link from "next/link"
import convertToMoney from "@/app/function/convert"
const open = Open_Sans({})
const inter = Inter({})

export function Shopcard({ data }) {



    const [purchaseloading, setpurchaseloading] = useState(false)
    const [popup, setpopup] = useState(false)





    return (
        <>
            {purchaseloading && <Backdrop> <h1 className="text-4xl font-bold text-white" > Loading </h1> </Backdrop >}
            {
                data.map(e =>
                    <Link key={e.id} href={`/product/${e.id}`} >
                        <div className="bg-zinc-50 shadow-xs shadow-zinc-900 flex flex-col items-center justify-evenly py-3 px-1.5 h-max w-45  rounded-xl" >
                            <Image width={120} height={120} alt={e.nama_barang} loading="eager" src={e.Product_image.trimEnd()} id="mockup-image" className="h-60 object-center object-cover w-full bg-black rounded-md " />
                            <div id="information" className="w-full h-15 flex flex-col justify-start items-start" >
                                <h1 className={inter.className + " text-md tracking-wider font-semibold"}  > {e.nama_barang} </h1>
                                <h2 className={inter.className + " text-md font-medium -mt-1 "} > {convertToMoney(e.harga)} </h2>
                            </div>
                        </div>
                    </Link>)
            }
        </>
    )
}