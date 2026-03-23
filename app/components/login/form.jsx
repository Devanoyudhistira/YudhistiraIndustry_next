"use client"

import Inputlogin from "./input";
import Label from "./label";

export default function Form({ loginfunc }) {
    return (
        <form onSubmit={e => e.preventDefault()} className="w-full px-3 flex flex-col justify-evenly items-start "  >
            <Label htmlfor={"email"} >
                <h1 className="text-2xl ml-4 capitalize font-bold" >email</h1>
                <Inputlogin name={"email"} id={"email"} type={"email"} />
            </Label>
            <Label htmlfor={"password"}>
                <h1 className="text-2xl ml-4 capitalize font-bold" >password</h1>
                <Inputlogin name={"password"} id={"password"}  type={"password"} />
            </Label>
            <button className="bg-zinc-900 transition hover:scale-95  border-3 focus:scale:85 focus:bg-zinc-50 focus:text-zinc-950 text-zinc-50 text-4xl font-bold py-3 rounded-3xl w-[80%] self-center mt-10 flex justify-center items-center" > Login </button>
        </form>
    )
}