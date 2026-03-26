"use client"

import { useState } from "react";
import Inputlogin from "./input";
import Label from "./label";
import { ClipLoader } from "react-spinners"

export default function Form({ loginfunc,pending,result }) {    
    return (
        <form action={loginfunc} className="w-full px-3 flex flex-col justify-evenly items-start "  >
            <Label htmlfor={"email"} >
                <h1 className="text-2xl ml-4 capitalize font-bold" >email</h1>
                <Inputlogin error={result} name={"email"} id={"email"} type={"email"} />
            </Label>
            <Label htmlfor={"password"}>
                <h1 className="text-2xl ml-4 capitalize font-bold" >password</h1>
                <Inputlogin error={result} name={"password"} id={"password"}  type={"password"} />
            </Label>
            
           {result.error && <h1 className="self-center text-2xl text-red-600 font-bold mt-3" > {result.message} </h1>}
           
            <button disabled={pending}  className={` disabled:bg-zinc-100 disabled:text-zinc-950 transition hover:scale-95  border-3 focus:scale:85 focus:bg-zinc-50 focus:text-zinc-950 text-zinc-50 text-4xl font-bold py-3 rounded-3xl w-[80%] self-center mt-2 flex justify-center items-center text-center  ${ result.error ? "bg-red-500 border-red-700" : "bg-zinc-900"} `} >
                {!pending ? "Login" :  <span  className="flex items-center justify-center gap-3" > <ClipLoader  size={40} /> loading </span>  } </button>
        </form>
    )
}