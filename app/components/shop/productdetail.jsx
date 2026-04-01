"use client"
import Image from "next/image"
import { Plus } from "react-bootstrap-icons"
import convertToMoney from "@/app/function/convert"
import { DashLg } from "react-bootstrap-icons"
import { ArrowRight } from "react-bootstrap-icons"
import { formatnumber, parseIDR } from "@/app/function/numberformat"


export default function Productdetail({ data, clickhandler, quantity, setquantity, setprice, price }) {
    setprice(convertToMoney(data.harga * quantity))

    return (
        <div className=" h-auto flex flex-col justify-between items-center mt-15 relative pb-12" >
            <Image width={150} height={150} alt={data.nama_barang} className="w-94 h-90 -ml-4 rounded-xl overflow-hidden object-cover object-center" src={data.Product_image.trimEnd()} />
            <div className="flex flex-col w-full mt-2 px-3 h-54 " >
                <div className="flex flex-col w-full justify-between " >
                    <h1 className={"text-6xl font-bold "} > {data.nama_barang} </h1>
                    <h1 className="font-light text-2xl" > {convertToMoney(data.harga)} </h1>
                </div>
                <p className={"text-md mt-1 font-light text-zinc-950 h-34 overflow-y-auto px-2 py-1  "} >{data.description} </p>
            </div>
            <footer className="w-screen mt-20 flex items-center justify-center " >
                <div className="w-[80%]  -mt-20 py-1 px-2  shadow-xs shadow-zinc-200 flex flex-col justify-between items-center" >
                    <div className="bg-sky-100 w-[90%] h-max rounded-xl mb-3 py-4 gap-3" >
                        <div className="flex w-full justify-between px-6" >
                            <h3 className="font-medium text-xl capitalize" > Stock </h3>
                            <h1 className="font-bold text-xl capitalize" > {data.jumlah} </h1>
                        </div>
                        <div className="flex w-full justify-between px-6" >
                            <h3 className="font-medium text-xl capitalize" > Dibeli </h3>
                            <h1 className="font-bold text-xl capitalize" > {data.product_number} </h1>
                        </div>
                    </div>
                    <div className="w-full px-3  flex justify-between items-center" >
                        <div>
                            <h1 className="text-md font-medium tracking-wide" >quantity</h1>
                            <div className="flex justify-between gap-5 w-max px-2 items-center bg-sky-100 rounded-md" >
                                <button onClick={() => setquantity(quantity <= 1 ? quantity : quantity - 1)} > <DashLg size={24} /> </button>
                                <h1 className={"text-2xl font-semibold "} > {quantity} </h1>
                                <button onClick={() => setquantity(quantity + 1)} > <Plus size={30} /> </button>
                            </div>
                        </div>
                        <div >
                            <h1 className="text-md font-medium" >total value</h1>
                            <h1 className="text-xl tracking-wider font-medium" > {convertToMoney(parseIDR(data.harga) * quantity ) }</h1>
                        </div>
                    </div>
                    <button onClick={clickhandler} className="text-2xl tracking-wider bg-zinc-900 text-zinc-50 px-6 py-2 rounded-md  mt-3 flex items-center gap-2 font-semibold w-max h-min" > Checkout <ArrowRight /> </button>
                </div>
            </footer>
        </div>)
}