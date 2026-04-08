"use client"
import Link from "next/link"
import truncate from "@/app/function/truncat"
import Image from "next/image"

export default function Newestitem({ harga, nama, tanggal, image, id }) {
    return (

        <div className="w-80 oy-3 h-max  shadow-md overflow-hidden shadow-purple-400/40 inset-shadow-xs inset-shadow-purple-500 rounded-xl flex flex-col items-center" >
            <Image loading="eager" width={600} height={600} className="objext-center rounded-xl object-cover w-full h-55 " alt="barang terbaru" src={image} />
            <div className="w-full flex flex-col gap-1 items-start px-2 pb-4 " >
                <div className="w-full flex items-center justify-between" >
                    <h1 className="font-bold text-3xl text-gray-950" > {truncate(nama, 13)} </h1>
                    <h2 className="font-bold text-xl  text-purple-500" > {harga} </h2>
                </div>
                <Link className="self-center" href={`product/${id}`} >
                    <button className=" bg-purple-400 font-extrabold focus:bg-purple-50 focus:text-zinc-950 focus:border-2 focus:scale-90 border-purple-400 transition text-gray-50 rounded-2xl shadow-xl shadow-indigo-600/40 text-xl px-12 py-2" > Buy Now </button>
                </Link>
            </div>
        </div>
    )
}