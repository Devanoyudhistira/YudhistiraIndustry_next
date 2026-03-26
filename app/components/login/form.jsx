"use client"

import { useState } from "react";
import Inputlogin from "./input";
import Label from "./label";
import { ClipLoader } from "react-spinners"

export default function Form({ loginfunc, pending, result }) {
    return (
        <>
            <form action={loginfunc} className="w-full px-3 flex flex-col justify-evenly items-start gap-1.5 "  >
                {result.error &&
                    <div className="w-85 mr-2 bg-red-200 border-l-4 border-l-red-600 h-max p-2 self-center -mt-7" > <h2 className=" text-2xl text-red-800 font-bold " > {result.message} </h2> </div>
                }
                <Label htmlfor={"email"} >
                    <h1 className="text-2xl ml-4 capitalize font-bold" >email</h1>
                    <Inputlogin error={result} name={"email"} id={"email"} type={"email"} />
                </Label>
                <Label htmlfor={"password"}>
                    <h1 className="text-2xl ml-4 capitalize font-bold" >password</h1>
                    <Inputlogin error={result} name={"password"} id={"password"} type={"password"} />
                </Label>
                <button disabled={pending} className={`w-full mt-3 self-center mr-2 bg-zinc-950 disabled:text-black disabled:bg-zinc-100  text-zinc-100 text-3xl py-4 rounded-xl flex items-center justify-center gap-3 font-bold tracking-tight hover:bg-primary-container active:scale-95 transition-all duration-200 shadow-lg shadow-on-surface/5 `} >
                    {!pending ? "Login" : <span className="flex items-center justify-center gap-3" > <ClipLoader className="text-zinc-900 text-3xl" /> loading </span>} </button>
            </form>
            <footer
                className=" flex items-center justify-center bg-zinc-50/80 fixed bottom-0 left-0 border-t border-[#c6c6cd]/20 w-full py-8">
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-3 gap-2">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <span class="text-xl font-black text-zinc-900 ">Yudhistira Industry</span>
                    </div>
                    <div
                        className="text-zinc-600  font-inter text-xs  uppercase">
                        © 2026 Yudhistira Industry. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}