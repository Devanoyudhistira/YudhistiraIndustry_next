"use client"
import { CurrencyDollar } from "react-bootstrap-icons"
import { Cash } from "react-bootstrap-icons"
import { GraphUpArrow } from "react-bootstrap-icons"

export default function Infocard({ invoname, invovalue, icon }) {
    return (
        <div className="flex -ml-2 relative flex-col cursor-pointer items-evenly j px-2 py-3 h-32 rounded-xl bg-zinc-50 transition hover:bg-zinc-950 shadow-xs shadow-black hover:text-zinc-100 focus:bg-zinc-950 focus:text-zinc-100" >
            <div className="bg-green-200 w-max h-max p-2 rounded-md" > {icon}</div>
            <h2 className="text-xs font-semibold tracking-wider capitalize " > {invoname} </h2>
            <h1 className="text-md font-bold tracking-wide  " > {invovalue} </h1>
            <div className="flex gap-2" >

                <h4 className="text-xs font-medium tracking-wider text-green-500" >  +12.5% </h4>
            </div>
        </div>)
}