"use client"
import { Open_Sans, Inter } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"
import Backdrop from "../backdrop"
import Link from "next/link"
import convertToMoney from "@/app/function/convert"
import truncate from "@/app/function/truncat"
import * as motion from "motion/react-client"
const open = Open_Sans({})
const inter = Inter({})


export function Shopcard({ data }) {
    const [purchaseloading, setpurchaseloading] = useState(false)
    const [popup, setpopup] = useState(false)
    console.log(data)
    return (
        <>
            {purchaseloading && <Backdrop> <h1 className="text-4xl font-bold text-white" > Loading </h1> </Backdrop >}
            {
                data.map(e =>
                    <motion.div key={e.id} className={`shadow-xs bg-gray-50  ${e.jumlah <= 0 ? "shadow-gray-600" : "shadow-purple-500"} flex flex-col items-center justify-evenly px-1.5 gap-1  py-2 h-max w-40 rounded-xl`} >
                        <motion.div className="w-full overflow-hidden " >
                            <Image width={500} height={500} alt={e.nama_barang} loading="eager" src={e.Product_image.trimEnd()} id="mockup-image" className={`${e.jumlah <= 0 ? "grayscale-75" : "grayscale-0"}  h-27 hover:scale-110 object-center transition object-cover w-full rounded-md`} />
                        </motion.div>
                        <div id="information" className="w-full -mt-1 h-15 flex flex-col justify-start items-start" >
                            <h1 className={inter.className + " text-md tracking-wider font-semibold "}  > {truncate(e.nama_barang, 11)} </h1>
                            <h2 className={inter.className + " text-md font-medium -mt-1 "} > {truncate(convertToMoney(e.harga), 10)} </h2>
                        </div>
                        <div className="w-full h-max px-1 flex flex-col border-t-2 border-gray-100 -mt-2 gap-2" >
                            <div className="text-xs  w-full flex justify-between items-center" >
                                <h2 className="font-light" >Stock</h2>
                                <h1 className={`${e.jumlah < 10 ? "text-red-600" : "text-purple-500"}  font-semibold`} >{e.jumlah} </h1>
                            </div>
                            <div className="text-xs  -mt-2 w-full flex justify-between items-center" >
                                <h2 className="font-light" > terjual </h2>
                                <h1 className="font-semibold"  >{e.product_number} </h1>
                            </div>
                        </div>
                        {e.jumlah !== 0 ?  <Link href={`product/${e.id}`} >
                            <button className=" w-max px-2 py-1 bg-purple-500 text-purple-50 font-semibold transition hover:text-gray-950 hover:bg-purple-100 focus:border-3 border-purple-600 rounded-xl text-center focus:scale-90 focus:text-zinc-950 focus:bg-zinc-50 " > See Detail </button>
                        </Link> : <h1 className="text-md font-bold" > kehabisan stock :( </h1> }
                    </motion.div>)
            }
        </>
    )
}