"use client"
import { useState } from "react"
import { X } from "react-bootstrap-icons"
import { Search } from "react-bootstrap-icons"
import { Open_Sans } from "next/font/google"
import { Person } from "react-bootstrap-icons"
import Link from "next/link"
import { Cart2 } from "react-bootstrap-icons"

const open = Open_Sans({})

export function Navigation({user}) {
    const [searchmode, setsearchmode] = useState(false)
    return (
        <nav className="border-b-2 w-screen left-0 h-13 z-100 fixed top-0 bg-zinc-100 flex pl-2 pr-1 justify-between items-center" >
           {!searchmode && <h1 className={open.className + " text-2xl font-bold"} > YudhistiraIndustry  </h1>}
            <div className="flex gap-2 items-center" >
          {!searchmode && user && 
          <Link href={"/admin/home"} className="w-10 h-10 p-2 flex items-center justify-center rounded-xl bg-green-400 " > <Person className="text-3xl" /> 
          </Link>}
                {searchmode &&
                    <div className="flex items-center" >                
                        <input type="text" className={"rounded-xl bg-zinc-200 px-1 text-xl w-92 py-0.5 font-medium " + open.className} />
                        <button onClick={ e => setsearchmode(false)} > <X size={40} /> </button>
                    </div>
                }
                {!searchmode && <button onClick={() => setsearchmode(true)} className="bg-zinc-50 w-max h-max p-1.5 rounded-md shadow-[0.5px_0.5px_2px_black]" >
                    <Cart2 size={30} className="text-zinc-900" />
                </button>}
            </div>
        </nav>
    )
}