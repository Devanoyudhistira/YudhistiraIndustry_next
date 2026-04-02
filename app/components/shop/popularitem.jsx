"use client"

import Image from "next/image"
import Link from "next/link"

export default function Popularitem({ id,gambar, nama, stock, terjual, tanggal, urutan, harga }) {
    return (
        <Link href={`product/${id}`} >
            <div className="w-77 h-max bg-white shadow-xs rounded-xl flex flex-col items-center py-2 px-2 relative" >
                <div className="absolute z-100 text-white w-max h-max px-2 py-2 rounded-full text-xl bg-yellow-500 top-2 left-5" > {urutan + 1}# </div>
                <Image width="1000" className="w-[90%] h-38 rounded-xl object-cover object-center " src={gambar.trimEnd()} height="1000" alt="popular" />
                <div className="w-max ml-1 flex gap-1 px-3 items-center self-start" >
                    <h4 className="text-xs font-light" >
                        dibuat:  </h4>
                    <h2 className="text-xs font-light" > {tanggal} </h2>
                </div>
                <h1 className="self-start ml-4 text-2xl font-medium" > {nama} </h1>
                <h1 className="font-semibold text-xl self-start ml-4" > {harga} </h1>
                <div className="w-full flex justify-between mt-2 border-t border-gray-500 items-center" >
                    <div className="text-[12.5px] px-4 text-center mt-1" >
                        <h4 className="font-light capitalize" > Stok  </h4>
                        <h2 className={`font-semibold `} > tersisa <span className={`${stock < 10 ? "text-red-600" : "text-green-500"}`} > {stock} </span></h2>
                    </div>
                    <div className="text-[12.5px] text-center mt-1 px-3" >
                        <h4 className="font-light capitalize" > Sudah terjual </h4>
                        <h2 className="font-semibold" > {terjual} </h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}