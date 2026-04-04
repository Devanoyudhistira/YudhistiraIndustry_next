"use client"

import truncate from "@/app/function/truncat"
import Image from "next/image"
import Link from "next/link"

export default function Popularitem({ id, gambar, nama, stock, terjual, tanggal, urutan, harga }) {
    return (        
            <div className="w-66 h-69 bg-linear-to-t shadow-2xl shadow-blue-500/20 overflow-hidden  rounded-xl flex flex-col items-center relative" >                
            <div className="w-full h-full bg-gray-950/20 absolute gap-3 left-0 top-0 z-50 flex flex-col items-center justify-center" >
                <h3 className="bg-purple-300 p-1 rounded-xl capitalize self-start ml-8 text-xs font-bold" > Top seller </h3>
                <h1 className="text-5xl w-60 h-16 font-extrabold text-purple-50" > {truncate(nama,14)} </h1>
                <Link href={`product/${id}`} className="bg-purple-400 rounded-xl self-start ml-5 mt-6 text-purple-100 text-2xl px-3 font-bold shadow-xl
                inset-shadow-2xs inset-shadow-indigo-500/50 shadow-purple-600/50" > Lihat </Link>

             </div>
                <Image width="800" className="w-full h-full  rounded-xs object-cover object-center " src={gambar.trimEnd()} height="800" alt="popular" />
            </div>        
    )
}