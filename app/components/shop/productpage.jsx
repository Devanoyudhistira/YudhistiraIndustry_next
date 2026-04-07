"use client"

import { useState, useEffect } from "react"
import Productdetail from "./productdetail"
import Userform from "./userform"
import Backdrop from "../backdrop"
import supabase from "@/supabase/supabase";
import convertToMoney from "@/app/function/convert"
import { parseIDR } from "@/app/function/numberformat"



export default function Productpage({ data, id,image,harga,nama }) {
    const [openuser, setopenuser] = useState(false)
    const [quantity, setquantity] = useState(1)
    const [grossprice, setgrossprice] = useState(data.harga * quantity)
    const baseurl = window.location.origin


    async function purchase(e, id, quantity, nama_pembeli, email_pembeli, nomor_pembeli) {
        e.preventDefault();
        // console.log(id)  
        const { data } = await supabase.from("product_demo").select("harga,nama_barang").eq("id", id).single()        


        const transaction = await fetch(`${baseurl}/api/purchase`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                produk: data.nama_barang,
                harga: parseIDR(data.harga),
                quantity: quantity,
                grossprice:parseIDR(data.harga) * quantity,
                id: id,
                namapembeli: nama_pembeli,
                emailpembeli: email_pembeli,
                nomorpembeli: nomor_pembeli,
            }),
        })
        const token = await transaction.json();
        console.log(token);
        window.snap.pay(token, {
            onSuccess: function (result) {                
                window.location.href = `/purchase`;
            },
            onPending: function (result) {
                window.location.href = `/purchase`;
            },
            onError: function (result) {
                window.location.href = `/purchase`;
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
        <>
            <Productdetail data={data} setprice={setgrossprice} quantity={quantity} setquantity={setquantity} clickhandler={() => setopenuser(true)} price={grossprice} />
            {openuser &&
                <Backdrop>
                    <Userform image={data.Product_image} nama={data.nama_barang} harga={data.harga} closecondition={openuser} purchase={purchase} closehandle={() => setopenuser(false)} id={id} quantity={quantity} />
                </Backdrop>
            }

        </>
    )
}