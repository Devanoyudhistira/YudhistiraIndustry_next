"use client"
import Image from "next/image"
import { Plus } from "react-bootstrap-icons"
import { Inter, Open_Sans } from "next/font/google"
import convertToMoney from "@/app/function/convert"
import { DashLg } from "react-bootstrap-icons"
import { ArrowLeft } from "react-bootstrap-icons"
import { ArrowRight } from "react-bootstrap-icons"


export default function Productdetail({ data, clickhandler, quantity, setquantity, setprice, price }) {
    setprice(convertToMoney(data.harga * quantity))

    return (
        <div className=" h-auto flex flex-col justify-between items-center mt-15 relative pb-12" >
            <Image width={150} height={150} alt={data.nama_barang} className="w-70 h-90 -ml-4 rounded-md object-cover object-center" src={data.Product_image} />
            <div className="flex flex-col w-full mt-2 px-3  h-54 " >
                <div className="flex w-full justify-between " >
                    <h1 className={"text-3xl font-bold "} > {data.nama_barang} </h1>

                    <h1 className="font-semibold text-xl" > {convertToMoney(data.harga)} </h1>
                </div>
                <p className={"text-md font-light text-zinc-950 "} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aperiam? Iusto tenetur magni dolorem! Earum beatae ab eius mollitia illum. </p>
            </div>
            <footer className="w-screen flex items-center justify-center " >
                <div className="w-[80%]  -mt-20 py-1 px-2  shadow-xs shadow-zinc-200 flex flex-col justify-between items-center" >
                    <div className="w-full px-3 flex justify-between items-center" >
                        <div>
                            <h1 className="text-md font-medium tracking-wide" >quantity</h1>
                            <div className="flex bg-sky-200 justify-between gap-5 w-max px-2 items-center" >
                                <button onClick={() => setquantity(quantity <= 1 ? quantity : quantity - 1)} > <DashLg size={24} /> </button>
                                <h1 className={"text-2xl font-semibold "} > {quantity} </h1>
                                <button onClick={() => setquantity(quantity + 1)} > <Plus size={30} /> </button>
                            </div>
                        </div>
                        <div >
                            <h1 className="text-md font-medium" >total value</h1>
                            <h1 className="text-xl tracking-wider font-medium" > {convertToMoney(data.harga * quantity)}</h1>
                        </div>
                    </div>
                    <button onClick={clickhandler} className="text-2xl tracking-wider bg-zinc-900 text-zinc-50 px-6 py-2 rounded-md  mt-3 flex items-center gap-2 font-semibold w-max h-min" > Checkout <ArrowRight /> </button>
                </div>
            </footer>
        </div>)
}