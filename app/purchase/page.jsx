import Link from "next/link"
import { CreditCard } from "react-bootstrap-icons"
import supabase from "@/supabase/supabase"
import convertToMoney from "@/app/function/convert"
import moment from "moment"
import { FiletypePdf } from "react-bootstrap-icons"
import { Receipt } from "react-bootstrap-icons"
import { Download } from "react-bootstrap-icons"
import { ArrowLeft } from "react-bootstrap-icons"
import { parseIDR } from "@/app/function/numberformat"
import { cookies } from "next/headers"
import { Check2 } from "react-bootstrap-icons"
import * as motion from "motion/react-client"
import { Hourglass } from "react-bootstrap-icons"
import { ArrowClockwise } from "react-bootstrap-icons"

export default async function Success({ params }) {
    const cookie = await cookies()
    const orderid = cookie.get("orderid")
    const { data } = await supabase.from("invoice_new").select("*").eq("orderid", orderid.value).single()
    return (
        <div className="flex flex-col w-screen h-max py-2 px-2 items-center justify-start " >
           {data.status === "settlement" ? <motion.div animate={{
                y: [0, -3, 0], boxShadow: [
                    "0px 5px 15px rgba(0, 212, 146, 0.1)",
                    "0px 25px 30px rgba(0, 212, 146, 0.2)",
                    "0px 5px 15px rgba(0, 212, 146, 0.1)",
                ],
            }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }} className="bg-green-200 border-4 border-gray-50 shadow-md shadow-green-400/50 flex items-center justify-center w-27 h-27 rounded-xl" > <Check2 size={80} /> </motion.div> : <motion.div animate={{
                y: [0, -3, 0], boxShadow: [
                    "0px 5px 15px rgba(255, 240, 133, 0.2)",
                    "0px 25px 30px rgba(255, 240, 133, 0.1)",
                    "0px 5px 15px rgba(255, 240, 133, 0.2)",
                ],
            }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }} className="bg-yellow-100 border-4 border-gray-50 shadow-md shadow-green-400/50 flex items-center justify-center w-27 h-27 rounded-xl" > <Hourglass size={80} /> </motion.div> }
            <h1 className="text-2xl font-bold mt-3 capitalize" > {data.status === "settlement" ? <span className="text-green-700" > Pembelian sukses </span>:  <span className=" text-yellow-600" > Pembelian tertunda </span> }  </h1>
            <p className="text-center  font-semibold  text-md" > {data.status === "settlement" ? "Transaksi telah berhasil silahkan ambil barang anda di" : "transaksi tertunda harap coba lagi"}
                {data.status ==="settlement" && <Link href={"https://share.google/4Lap5OiJxhxS7HoVe"} className="text-green-800 font-bold block " > 0880 Malibu Point, 90265,</Link>}</p>
            {data.status === "settlement" && <div className="w-full flex items-start justify-center flex-col px-4 mt-6 " >
                <h3 className="text-[18px] font-bold text-gray-400" > Total Pembayaran </h3>
                <h1 className="text-4xl font-bold text-green-800" > {convertToMoney(new Intl.NumberFormat('id-ID').format(data.pembayaran))} </h1>
            </div>}
             <div className={`w-88 gap-2 flex flex-col items-center h-max  rounded-xl px-3 py-2 mt-3 ${data.status === "settlement" ? "bg-green-200/10 shadow-xl shadow-green-400/20" : "bg-yellow-200/10 shadow-xl shadow-yellow-400/20"} `} >
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium " > Atas nama </h4>
                    <h2 className="font-semibold" > {data.nama} </h2>
                </div>
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium " > Nama Barang </h4>
                    <h2 className="font-semibold" > {data.nama_barang} </h2>
                </div>
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium " > Order Id </h4>
                    <h2 className="font-semibold" > {data.orderid} </h2>
                </div>
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium capitalize" > Tanggal Transaksi </h4>
                    <h2 className="font-semibold" > {moment(data.created_at).format("MMM D YYYY HH:MM A")} </h2>
                </div>
            </div>
            {data.status === "settlement" && <motion.button whileTap={{ scale: 0.9 }}
                transition={{
                    duration: 0.1,
                }} className="bg-green-300  w-82 h-20 rounded-xl mt-4 items-center justify-center gap-5 flex px-6 cursor-pointer shadow-xl shadow-emerald-400/20 inset-50 " >
                <Receipt className="text-green-500" size={30} />
                <div className="text-left" >
                    <h1 className="text-md font-bold border-b-2 border-green-800 w-min " > Invoice.pdf </h1>
                    <p className="text-xs font-medium" > tekan untuk menyimpan nota anda </p>
                </div>
            </motion.button>}
            {data.status === "settlement" && <h2 className="font-bold text-sm text-red-500 mt-1"> Pastikan anda menyimpan nota </h2>}
            <Link className="mt-4 w-84 rounded-xl text-center flex justify-center items-center gap-3 bg-zinc-950 capitalize text-zinc-50 font-bold text-2xl py-3" href={data.status === "settlement" ? "/" : `/product/${data.product_id}`}> {data.status === "setllment" ? <span> <ArrowLeft />  kembali</span> 
            : <span className="items-center gap-2 w-max flex" > <ArrowClockwise />kembali</span> } </Link>

        </div>
    )
}