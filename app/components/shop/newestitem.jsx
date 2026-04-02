"use client"
import Link from "next/link"
import truncate from "@/app/function/truncat"
import Image from "next/image"

export default function Newestitem({ harga, nama, tanggal, image ,id}) {
    return (
        <Link href={`product/${id}`} >
            <div className="w-50 oy-3 h-max px-2 shadow-xs rounded-xl flex flex-col items-center" >
                <Image width={600} height={600} className="objext-center rounded-xl object-cover w-full h-65 " alt="barang terbaru" src={image} />
                <div className="w-full flex flex-col items-start px-2 " >
                    <h1 className="font-bold text-xl text-white" > {truncate(nama, 13)} </h1>
                    <h3 className="font-medium text-sm text-white" > {tanggal} </h3>
                    <h2 className="font-light text-md  text-gray-200" > {harga} </h2>
                </div>
            </div>
        </Link>
    )
}