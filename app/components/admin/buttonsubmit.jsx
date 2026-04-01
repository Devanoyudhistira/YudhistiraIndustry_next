"use client"

import { ArrowRight } from "react-bootstrap-icons"

export default function Buttonsubmit({message,icon}){
    return(
        <button type="submit" className="w-full h-auto focus:scale-90 transition focus:text-zinc-950 focus:bg-zinc-50 border-3 bg-gray-950 py-3 text-2xl font-semibold text-zinc-50 text-center gap-3 justify-center items-center rounded-xl mt-10 flex" >
            <span className="capitalize" > {message || "create"} </span>
            {icon || <ArrowRight/>}
        </button>
    )
}