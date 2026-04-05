"use client"

import { ArrowRight } from "react-bootstrap-icons"
import { MoonLoader } from "react-spinners"

export default function Buttonsubmit({message,icon,loading}){
    return(
        <button disabled={loading} type="submit"  className="w-full h-auto focus:scale-90 transition  disabled:bg-purple-50 disabled:text-zinc-950 hover:text-zinc-950 hover:from-purple-50 hover:to-purple-200 focus:text-zinc-950 focus:from-purple-50 focus:to-purple-200 hover:border-2 border-purple-300 bg-linear-to-t from-purple-500 to-purple-700 py-3 text-2xl font-semibold text-purple-200 text-center gap-3 justify-center items-center rounded-xl mt-10 flex" >
           {!loading ? <span className="capitalize" > {message || "create"} </span> : <span className="capitalize flex gap-2 items-center" > Loading <MoonLoader size={30} /> </span> }
             {!loading && <span>{ icon || <ArrowRight/>} </span>}
        </button>
    )
}