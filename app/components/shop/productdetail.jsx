"use client"
import Image from "next/image"
import { Plus } from "react-bootstrap-icons"
import { Inter, Open_Sans } from "next/font/google"
import convertToMoney from "@/app/function/convert"
import { DashLg } from "react-bootstrap-icons"

const inter = Inter({})
const open = Open_Sans({})


export default function Productdetail({ data, clickhandler, quantity, setquantity, setprice,price }) {
    setprice(convertToMoney(data.harga * quantity))

    return (
        <div className="w-full h-auto  flex flex-col justify-between items-center mt-15 relative" >    
            <Image width={150} height={150} alt={data.nama_barang} className="w-90 h-90 -ml-4 rounded-md object-cover object-center" src={data.Product_image} />
            <div className="flex flex-col w-full  px-3  h-54 " >
                <div className="flex w-full justify-between " >
                    <h1 className={"text-2xl font-bold " + open.className} > {data.nama_barang} </h1>
                    <div className="flex justify-between gap-3 w-max px-2 items-center" >
                        <button onClick={() => setquantity(quantity + 1)} className="quantitybutton" > <Plus size={25} /> </button>
                        <h1 className={"text-2xl font-semibold " + inter.className} > {quantity} </h1>
                        <button onClick={() => setquantity(quantity <= 1 ? quantity : quantity - 1)} className="quantitybutton" > <DashLg size={25} /> </button>
                    </div>
                </div>
                <p className={"text-xl font-medium  " + open.className} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aperiam? Iusto tenetur magni dolorem! Earum beatae ab eius mollitia illum. </p>
            </div>
            <footer className="w-screen flex items-center justify-center " >
                <button onClick={clickhandler} className={"w-[80%] h-auto py-2 bg-zinc-900 text-2xl text-white rounded-md focus:border-3 hover:border-3 transition focus:scale-95 focus:bg-zinc-100 tracking-wide focus:text-black hover:scale-95 hover:bg-zinc-100 hover:text-black font-bold " + open.className} > {convertToMoney(data.harga * quantity)} </button>
            </footer>
        </div>)
}