"use client"

import purchase from "@/app/actions/purchase/purchase"
import { Inter, Open_Sans } from "next/font/google"
import { motion, AnimatePresence } from "motion/react"
import { X } from "react-bootstrap-icons"
import Backdrop from "../backdrop"

const inter = Inter({})
const open = Open_Sans({})

export default function Userform({ id, closehandle, closecondition }) {
    return (       
            <AnimatePresence initial={false}>
                {
                    closecondition &&
                    <motion.form initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onSubmit={e => purchase(e, id, quantity, "namapembeli", "emailpembeli", "nomer hp pembeli")} className="bg-zinc-100 shadow-[1px_1px_10px_black] w-[95vw] h-max px-2 py-1 flex flex-col justify-evenly items-start fixed top-10 border-3 rounded-md gap-2"  >

                        <div className="flex justify-between w-full items-center" >
                            <h1 className={"text-4xl justify-self-center font-bold capitalize self-center " + open.className}  > Tolong Isi </h1>
                            <button type="button" onClick={closehandle} className="self-end" > <X size={50} /> </button>
                        </div>
                        <label htmlFor="nama">
                            <h1 className="userformlabel" > Nama Lengkap </h1>
                            <input type="text" className="userform" name="nama" id="nama" />
                        </label>
                        <label htmlFor="email">
                            <h1 className="userformlabel" > Email </h1>
                            <input type="email" className="userform" name="email" id="email" />
                        </label>
                        <label htmlFor="nomer">
                            <h1 className="userformlabel" > Nomer Telepon </h1>
                            <input className="userform" type="tel" name="nomer" id="nomer" />
                        </label>

                        <button onClick={purchase} className={"text-2xl focus:scale-90 focus:bg-zinc-50 focus:text-zinc-950 transition self-center border-4 rounded-[18px] px-3 py-1.5 bg-zinc-900 text-zinc-50 font-semibold  " + open.className} > Konfirmasi </button>

                    </motion.form>}
            </AnimatePresence>
    )
}