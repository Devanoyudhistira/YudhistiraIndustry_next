import { cookies } from "next/headers"
import Link from "next/link"
import { CreditCard } from "react-bootstrap-icons"
import supabase from "../supabase/supabase"
import convertToMoney from "../function/convert"
import moment from "moment"
import { FiletypePdf } from "react-bootstrap-icons"
import { Receipt } from "react-bootstrap-icons"
import { Download } from "react-bootstrap-icons"
import { ArrowLeft } from "react-bootstrap-icons"
import { parseIDR } from "../function/numberformat"

export default async function Success() {
    const cookie = await cookies()
    const orderid = cookie.get("orderid")
    const { data } = await supabase.from("invoice_new").select("*").eq("orderid", orderid.value).single()
    console.log(data)
    return (
        <div className="flex flex-col w-screen h-max py-2 px-2 items-center justify-start " >
            <div className="bg-green-400 flex items-center justify-center w-27 h-27 rounded-xl" > <CreditCard size={60} /> </div>
            <h1 className="text-2xl font-semibold capitalize" > barang anda sukses dibeli </h1>
            <p className="text-center  font-semibold text-gray-500 text-md" > Transaksi telah berhasil silahkan ambil barang anda di
                <Link href={"https://share.google/4Lap5OiJxhxS7HoVe"} className="text-zinc-950 block " > 0880 Malibu Point, 90265,</Link></p>
            <div className="w-full flex items-start justify-center flex-col px-4 mt-6 " >
                <h3 className="text-[18px] font-bold text-gray-400" > Total Pembayaran </h3>
                <h1 className="text-4xl font-semibold " > { convertToMoney(new Intl.NumberFormat('id-ID').format(data.pembayaran) )} </h1>
            </div>
            <div className="w-88 gap-2 flex flex-col items-center h-max bg-zinc-50 shadow-2xs shadow-zinc-950 rounded-xl px-3 py-2 mt-3" >
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium " > Nama Barang </h4>
                    <h2 className="font-semibold" > {data.nama_barang} </h2>
                </div>
                <div className="w-full justify-between px-1 flex items-center text-md">
                    <h4 className="font-medium " > Order Id </h4>
                    <h2 className="font-semibold" > {data.orderid} </h2>
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
            <button className="bg-green-200 w-82 h-20 rounded-xl mt-4 items-center justify-center gap-5 flex px-6 cursor-pointer" >
                <Receipt className="text-green-500" size={30} />
                <div className="text-left" >
                    <h1 className="text-md font-bold " > Nota anda siap </h1>
                    <p className="text-md font-medium" > tekan untuk menyimpan </p>
                </div>
            </button>
            <h2 className="font-bold text-sm text-red-500 mt-1"> Pastikan anda menyimpan nota </h2>
            <Link className="mt-4 w-84 rounded-xl text-center flex justify-center items-center gap-3 bg-zinc-950 text-zinc-50 font-bold text-2xl py-3" href={"/"}> <ArrowLeft/> kembali</Link>

        </div>
    )
}