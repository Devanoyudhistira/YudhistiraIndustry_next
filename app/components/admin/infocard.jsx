"use client"
import { CurrencyDollar } from "react-bootstrap-icons"
import { Cash } from "react-bootstrap-icons"
import { GraphUpArrow } from "react-bootstrap-icons"
import * as motion from "motion/react-client"

export default function Infocard({ invoname, invovalue, icon }) {
    return (
        <motion.div whileTap={{ backgroundColor:"#59168b",color:"white" }} className="flex pr-3 px-2 -ml-2 relative flex-col cursor-pointer items-start justify-center j py-3 h-32 rounded-xl bg-zinc-50 transition hover:bg-zinc-950 shadow-xs shadow-purple-600 hover:text-zinc-100 focus:bg-purple-900 focus:text-zinc-100" >
            <div className="bg-purple-200 w-max h-max p-2 rounded-md shadow-2xs  shadow-purple-400" > {icon}</div>
            <h2 className="text-xs font-semibold tracking-wider capitalize " > {invoname} </h2>
            <h1 className="text-md font-bold tracking-wide  " > {invovalue} </h1>            
        </motion.div>)
}