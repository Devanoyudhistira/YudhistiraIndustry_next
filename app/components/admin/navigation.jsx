"use client"
import { useState } from "react";
import Navbar from "./navbar";

export default function Navigation({ logout }) {
    const [opennav,setoepennav] = useState(false)
    return (
        <nav className="w-screen h-15 px-2 fixed left-0 to-0  flex justify-between border-b-2 bg-zinc-100 items-center z-100" >
            <h1 className="text-3xl font-black" >[Nama toko]</h1>
            <button onClick={e => setoepennav(true)}  className="flex flex-col h-auto py-1 px-1 items-center justify-center gap-2" >
                <span className="navline" ></span>
                <span className="navline" ></span>
                <span className="navline" ></span>
            </button>
           {opennav && <Navbar closefunc={e => setoepennav(false)} logout={logout} />            }
        </nav>
    )
}