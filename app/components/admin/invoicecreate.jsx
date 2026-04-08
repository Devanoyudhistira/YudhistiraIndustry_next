"use client"
import Image from "next/image";
import convertToMoney from "@/app/function/convert";
import { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import { Check } from "react-bootstrap-icons";
export default function Invoicecreate({ jumlah, nama_barang, harga, Product_image, id, clickevent, choosenproduct }) {
    console.log("type:", typeof choosenproduct);
    console.log("isArray:", Array.isArray(choosenproduct));
    console.log("value:", choosenproduct);
    function clickhandle(id) {
        clickevent(id);
    }
    return (
        <div className="w-40 h-55 flex flex-col shadow-md shadow-gray-950/50 rounded-xl overflow-hidden p-2 justify-between" >
            <Image loading="eager" width={300} className={`w-[95%] h-26 self-center rounded-md object-cover object-center ${jumlah <= 0 && 'grayscale-100'} `} height={300} src={Product_image} alt="perocbaan" />
            <div className="-mt-5 text-md font-medium" >
                <h1 className="" > {nama_barang} </h1>
                <span className={`${jumlah <= 0 && 'text-red-500'}`} > {jumlah} </span> Tersisa
            </div>
            <div className="w-full flex items-center justify-between text-md font-semibold  ">
                {jumlah <= 0 ? <h1 className="text-red-500" > stock Habis </h1> : <> <h1 className="font-bold text-violet-500 tracking-wider " > {convertToMoney(harga)} </h1>
                    <label htmlFor={`checkedproduct${id}`}>
                        <div className="flex text-4xl rounded-full items-center justify-center bg-purple-600 text-gray-50" > {choosenproduct.includes(id) ? <Check /> : <Plus />}  </div>
                        <input type="checkbox" hidden disabled={choosenproduct.includes(id)} onChange={() => clickhandle(id)} name="checkedproduct" id={`checkedproduct${id}`} />
                    </label>
                </>}
            </div>
        </div>
    )
}