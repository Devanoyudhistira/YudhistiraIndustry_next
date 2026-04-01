"use client"
import convertToMoney from "@/app/function/convert";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { Trash2 } from "react-bootstrap-icons";
import { PenFill } from "react-bootstrap-icons";

export default function Selleditem({ id, nama, stok, Terjual, gambar, harga }) {

    const baseurl = window.location.origin

    const deleteproduk = async () => {
        const data = await fetch(`/api/deleteaction`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({                
                id: id,         
            }),
        }).then(e => e.json()).then(res => console.log(res))
    }
    return (
        <div className="w-full h-max  rounded-xl  shadow-2xs  flex-col py-2" >
            <div className="w-full gap-2 px-2 flex justify-between" >
                <div className="w-max flex items-start gap-2 " >
                    <Image src={gambar.trimEnd()} alt={nama} height={100} width={100} className="bg-black w-18 h-18 rounded-md object-center object-cover" />
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
            <div className="flex text-xl gap-1 justify-self-end items-center px-4" >
                <button className="bg-blue-200 text-sky-500 p-1" > <Link href={`/admin/inventory/update/${id}`} className="bg-blue-300 font-medium" > <Pencil /> </Link> </button>
                <button onClick={deleteproduk} className="bg-red-200 text-red-500 p-1" > <Trash /></button>
            </div>
        </div>
    )
}