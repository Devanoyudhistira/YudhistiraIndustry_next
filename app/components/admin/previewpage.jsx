"use client"
import convertToMoney from "@/app/function/convert"
import { parseIDR } from "@/app/function/numberformat"
import Image from "next/image"
import { useState, useEffect } from "react"
import * as motion from "motion/react-client"
import { Plus } from "react-bootstrap-icons"
import { DashLg } from "react-bootstrap-icons"
export default function Previewpage({ data }) {
    const baseurl = window.location.origin
    const [choosenproduct, setchoosenproduct] = useState(data.map(e => ({
        id: e.id,
        nama: e.nama_barang,
        quantity: 1,
        harga: parseIDR(e.harga)
    })))

    function updatequantityincrease(id) {
        setchoosenproduct(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }
    function updatequantitydecrease(id) {
        setchoosenproduct(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    }

    async function purchase(e) {
        e.preventDefault();
        // console.log(id)          
        const transaction = await fetch(`${baseurl}/api/purchase`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                produk: choosenproduct
                    .map(item => item.nama)
                    .join(", "),
                harga: choosenproduct.reduce((acc, item) => {
                    return acc + (item.quantity * item.harga);
                }, 0),
                quantity: choosenproduct.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0),
                grossprice: choosenproduct.reduce((acc, item) => {
                    return acc + (item.quantity * item.harga);
                }, 0),
                id: 20,
                namapembeli: "pembeli",
                emailpembeli: "pembeli@gmail.com",
                nomorpembeli: "002323332",
            }),
        })
        const token = await transaction.json();
        console.log(token);
        window.snap.pay(token, {
            onSuccess: function (result) {
                window.location.href = `/admin/invoices`;
            },
            onPending: function (result) {
                window.location.href = `/admin/invoices`;
            },
            onError: function (result) {
                window.location.href = `/admin/invoices`;
            },
            onClose: function (res) {
                `/purchase/${result.orderid}`
            },
        });
        const responsepurchase = await fetch(
            `https://api.sandbox.midtrans.com/v2/${token}/status`,
            {
                headers: {
                    Authorization: "Basic " + btoa(process.env.NEXT_MIDTRANS_SERVER + ":"),
                },
            },
        );
    }

    useEffect(e => {
        const link = "https://app.sandbox.midtrans.com/snap/snap.js"
        const script = document.createElement("script")
        script.src = link
        script.setAttribute("data-client-key", process.env.NEXT_MIDTRANS_CLIENT)
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="w-screen h-screen pb-32 overflow-y-auto overflow-x-hidden flex flex-col justify-between items-center" >
            <div className="flex flex-col gap-4 w-full px-3 py-1 " >
                {data.map((e, i) =>
                    <div key={e.id} className="w-[90%] h-39 shadow-xl shadow-purple-700/10 rounded-4xl flex gap-2 items-center px-3 py-2" >
                        <Image src={e.Product_image} width={200} height={200} alt={e.nama_barang} className="w-30 h-30 rounded-xl object-cover object-center " />
                        <div>
                            <h1 className="text-2xl tracking-wider font-semibold" > {e.nama_barang} </h1>
                            <h2 className="text-xl font-medium text-violet-800 tracking-tight " > {convertToMoney(choosenproduct[i].harga * choosenproduct[i].quantity)} </h2>
                            <div className="bg-gray-100 w-max px-2 h-15 rounded-full flex items-center gap-4 " >
                                <motion.button onClick={() => updatequantityincrease(e.id)} whileTap={{ scale: 0.8 }} className="bg-gray-500/50 p-2 rounded-full" >
                                    <Plus size={25} />
                                </motion.button>
                                <h1 className="font-black text-purple-950" > {choosenproduct[i].quantity} </h1>
                                <motion.button disabled={choosenproduct[i].quantity <= 1} onClick={() => updatequantitydecrease(e.id)} whileTap={{ scale: 0.8 }} className="bg-gray-500/50 p-2 rounded-full" >
                                    <DashLg size={25} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <footer className="fixed bottom-0 bg-purple-600 w-screen h-20 rounded-t-4xl left-0 flex justify-center items-center" >
                <button onClick={purchase} className="text-purple-500 bg-gray-50 w-[90%] rounded-xl py-2 border-2 text-3xl font-bold border-violet-700" > Confirm Purchase </button>
            </footer>

        </div>
    )
}