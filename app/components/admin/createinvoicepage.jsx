"use client"

import Invoicecreate from "./invoicecreate"
import { ArrowLeft } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import Link from "next/link";
import { useState } from "react";

export default function Createinvoicepage({ dataproduct }) {
    const [openpreview, setpreview] = useState(false)    

    const [choosenproduct, setchoosenproduct] = useState([])

    function addproduct(id) {
  setchoosenproduct(prev =>
    prev.includes(id)
      ? prev.filter(item => item !== id) // remove
      : [...prev, id] // add
  );
}


    return (
        <div className="scroll-smooth pb-30">
            <nav className="w-screen h-11 px-2  flex items-center justify-between" >
                <div className="flex items-center gap-2 text-2xl" >
                    <Link href={"/admin/invoices"} >
                        <ArrowLeft className="text-purple-800" />
                    </Link>
                    <h1 className="font-semibold" > Buat invoice </h1>
                </div>
            </nav>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 px-4 w-full" >
                {dataproduct.map(e =>
                    <Invoicecreate clickevent={addproduct} key={e.id} id={e.id} Product_image={e.Product_image} nama_barang={e.nama_barang} choosenproduct={choosenproduct} jumlah={e.jumlah} harga={e.harga} />)}
            </div>
            <footer className="fixed bottom-0 z-100 bg-purple-500 left-0 w-screen h-20 rounded-t-4xl  flex items-center justify-between px-7 py-1"  >
                <h2>terpilih: {choosenproduct.length} </h2>
                <div className="flex items-center gap-3">
                    {choosenproduct.length > 0 && <button onClick={() => setchoosenproduct([])} className="bg-gray-50 border-3 border-red-500 text-2xl text-purple-800 font-semibold p-2 rounded-xl" > Discard </button>}
                    <Link href={`/admin/invoices/create/preview?id=${choosenproduct.join("+")}`} className="bg-gray-50 border-3 border-violet-800 text-2xl text-purple-800 font-semibold p-2 rounded-xl" > Preview </Link>
                </div>
            </footer>
        </div>
    )
}