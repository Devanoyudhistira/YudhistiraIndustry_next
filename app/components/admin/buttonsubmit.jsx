"use client"

import { ArrowRight } from "react-bootstrap-icons"
import { MoonLoader } from "react-spinners"

export default function Buttonsubmit({message,icon,loading}){
    return(
        <button disabled={loading} type="submit"  className="w-full h-auto focus:scale-90 transition disabled:bg-zinc-50 disabled:text-zinc-950 focus:text-zinc-950 focus:bg-zinc-50 border-3 bg-gray-950 py-3 text-2xl font-semibold text-zinc-50 text-center gap-3 justify-center items-center rounded-xl mt-10 flex" >
           {!loading ? <span className="capitalize" > {message || "create"} </span> : <span className="capitalize flex gap-2 items-center" > Loading <MoonLoader size={30} /> </span> }
             {!loading && <span>{ icon || <ArrowRight/>} </span>}
        </button>
    )
}