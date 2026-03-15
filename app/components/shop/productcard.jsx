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

    useEffect(e => {
        const link = "https://app.sandbox.midtrans.com/snap/snap.js"
        const script = document.createElement("script")
        script.src = link
        script.setAttribute("data-client-key", process.env.NEXT_MIDTRANS_CLIENT)
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const [purchaseloading, setpurchaseloading] = useState(false)
    const [popup, setpopup] = useState(false)



   

    return (
        <>
            {purchaseloading && <Backdrop> <h1 className="text-4xl font-bold text-white" > Loading </h1> </Backdrop >}
            {
                data.map(e =>
                    <div key={e.id} className="bg-zinc-100 flex flex-col items-center justify-evenly py-3 px-1.5 h-55 w-40 border-2 rounded-xl" >
                        <Image width={120} height={120} alt={e.nama_barang} loading="eager" src={e.Product_image} id="mockup-image" className="h-30 object-center object-cover w-full bg-black rounded-md " />
                        <div id="information" className="w-full h-10 flex justify-between items-center" >
                            <h1 className={inter.className + " text-md font-bold"}  > {e.nama_barang} </h1>
                            <h2 className={inter.className + " text-md font-bold "} > {convertToMoney(e.harga)} </h2>
                        </div>
                        <button className={"w-full px-3 py-1 bg-zinc-950  rounded-md  text-zinc-50 font-medium text-xl " + open.className} >   <Link href={`/product/${e.id}`} >purchase</Link>
                        </button>
                    </div>)
            }
        </>
    )
}