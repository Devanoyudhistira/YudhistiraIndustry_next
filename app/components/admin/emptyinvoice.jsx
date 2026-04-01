"use client"

import { File } from "react-bootstrap-icons"
import { EmojiFrown } from "react-bootstrap-icons"
import { EmojiFrownFill } from "react-bootstrap-icons"
import { ReceiptCutoff } from "react-bootstrap-icons"
import { Reception1 } from "react-bootstrap-icons"

export default function Emptyinvoice(){
    return(
        <div className="w-screen h-max py-15 px-1 flex flex-col items-center" >
            <div className="-mt-8 w-60 h-60 bg-sky-100  rounded-4xl flex items-center justify-center ">
                <div className="w-40 h-40 rounded-2xl bg-zinc-50 flex items-center justify-center" >
                    <ReceiptCutoff size={60}/>
                </div>
            </div>
            <h1 className="text-3xl text-center font-semibold" > Belum ada pembelian apapun </h1>
            <EmojiFrown size={50} className="mt-3"/>
        </div>
    )
}