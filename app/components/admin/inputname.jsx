"use client"

import { useState } from "react"

export default function Inputname({category,originalvalue}){
    const [text,settext] = useState(originalvalue || "")
    return(
        <label htmlFor="nama" className="justify-self-start self-start " >
            <h1 className="text-xl font-semibold capitalize " > nama produk </h1>
            <input required onChange={e => settext(e.target.value)} value={text} autoComplete="off" className="border-zinc-200 bg-zinc-50/80 focus:border-gray-950 invalid:border-red-700 transition rounded-md w-90 h-13 px-0.5 py-1 font-medium " type="text" name={category} id={category} />
        </label>
    )
}