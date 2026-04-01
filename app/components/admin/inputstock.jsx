"use client"
import { useState } from "react"
export default function Inputstock({originalvalue}){
    const [text,settext] = useState(originalvalue || 1)
    return(<div className="flex flex-col" >
            <h1> Stock </h1>
            <label htmlFor="stock" className="w-max h-max bg-zinc-100 focus-within:border-zinc-500 focus-within:bg-zinc-50 transition py-1 px-1 border-2 border-zinc-200 flex-col flex rounded-md items-center gap-0.5 relative" >
                <div className="flex gap-2 items-center w-full px-2" >                    
                    <input onChange={e => settext(e.target.value)} value={text} autoComplete="off" type="number" placeholder="1" className="h-min w-24 border-zinc-100/0 transition" id="stock" name="stock" />
                </div>
            </label>
        </div>)
}