"use client"
import { CurrencyDollar } from "react-bootstrap-icons"
import { Cash } from "react-bootstrap-icons"
import { GraphUpArrow } from "react-bootstrap-icons"

export default function Infocard ({invoname,invovalue ,icon}){
    return (
    <div className="flex relative flex-col cursor-pointer items-evently justify-center gap-1 px-2 py-3 col-span-7 h-32 rounded-xl bg-zinc-200 transition hover:bg-zinc-900 hover:text-zinc-100 focus:bg-zinc-950 focus:text-zinc-100" > 
        <h2 className="text-xl font-semibold tracking-wider capitalize " > {invoname} </h2>
        <h1 className="text-2xl font-bold tracking-wide  " > {invovalue} </h1>
        <div className="flex" > 
            {icon}
            <h4 className="text-2xl font-medium tracking-wider text-green-500" >  +12.5% </h4>
        </div>            
     </div>)
}