"use client"
import { useState } from "react"
import { X } from "react-bootstrap-icons"
import { Search } from "react-bootstrap-icons"
import { Open_Sans } from "next/font/google"
import { Person } from "react-bootstrap-icons"
import Link from "next/link"
import { Cart2 } from "react-bootstrap-icons"

const open = Open_Sans({})

export function Navigation({ user }) {
    const [searchmode, setsearchmode] = useState(false)
    return (
        <nav className=" w-screen left-0 h-13 z-1000 fixed top-0 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
 flex pl-2 pr-1 justify-between items-center " >
            <p className={open.className + " text-2xl font-bold"} > YudhistiraIndustry  </p>
            {user &&
                <Link href={"/admin/home"} className="w-10 h-10 p-2 flex items-center justify-center rounded-xl bg-green-400 " > <Person className="text-3xl" />
                </Link>}
        </nav>
    )
}