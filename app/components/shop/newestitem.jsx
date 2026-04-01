"use client"

import truncate from "@/app/function/truncat"
import Image from "next/image"

export default function Newestitem({ harga, nama, tanggal, image }) {
    return (
        <div className="w-50 h-max pb-5 px-2 shadow-xs rounded-xl flex flex-col items-center" >
            <Image width={1000} height={1000} className="objext-center rounded-xl object-cover w-full h-65 " alt="barang terbaru" src={image} />
            <div className="w-full flex flex-col items-start px-2 " >
                <h1 className="font-bold text-xl text-white" > { truncate(nama,13)} </h1>
                <h2 className="font-light text-md  text-gray-200" > {harga} </h2>
                <h3 className="font-medium text-sm text-white" > {tanggal} </h3>
            </div>
        </div>
    )
}