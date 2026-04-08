import Link from "next/link";
import { ArrowRight, Plus, ExclamationCircle } from "react-bootstrap-icons";



export default async function Failed({ searchParams }) {    
    const { error } = await searchParams
    function errormessage(errortype) {
        let message = "ada error"
        switch (errortype) {
            case "imagetobig":
                message = "gambar anda terlalu besar"
                break;
            case "imagemissing":
                message = "gambar tidak ditemukan"
                break;
            case "invalidtype":
                message = "file yang anda gunakan tidak valid gunakan format jpeg, png"
                break;
            default:
                break;
        }
        return message
    }
    return (
        <div className="flex flex-col w-screen px-4 h-max items-center justify-evenly" >
            <div className="flex items-center w-25 h-25 justify-center rounded-xl bg-red-200 px-2 py-1 text-red-600" > <ExclamationCircle size={40} /> </div>
            <h1 className="text-2xl font-bold " > Product Gagal Di Buat :( </h1>
            <p className="text-md mt-3 font-semibold text-center text-zinc-500" > {errormessage} </p>
            <div className="w-full h-max px-2 py-1 flex flex-col gap-2 mt-2" >
                <Link className="bg-zinc-950 w-full h-12 py-1 rounded-xl text-zinc-50 font-bold text-xl flex items-center justify-center gap-3 capitalize" href={"/admin/home"} > Kembali ke Menu <ArrowRight /> </Link>
                <Link className="bg-red-300 w-full h-12 py-1 rounded-xl text-red-600 font-bold text-xl flex items-center justify-center gap-1 capitalize" href={"/admin/inventory/create"}> Coba lagi <Plus size={40} /> </Link>
            </div>
        </div>
    )
}