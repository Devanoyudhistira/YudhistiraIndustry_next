"use client"
import { Inter, Open_Sans } from "next/font/google"
import { motion, AnimatePresence } from "motion/react"
import { X } from "react-bootstrap-icons"
import Backdrop from "../backdrop"
import { useState } from "react"

const inter = Inter({})
const open = Open_Sans({})

export default function Userform({ id, closehandle, closecondition, quantity, purchase }) {

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [nomor,setnomor] = useState("")    

    return (

     <AnimatePresence>
  {closecondition && (
    <Backdrop onClick={closehandle}>
      <motion.form
        key="form"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => purchase(e, id, quantity,name,email,nomor)}
        className="bg-zinc-100 -mt-10 shadow-[1px_1px_10px_black] w-[95vw] h-full px-2 py-1 flex flex-col fixed top-10 rounded-md gap-2">
        <div className="flex justify-between w-full items-center">
          <h1 className={"text-4xl font-bold " + open.className}>
            Tolong Isi
          </h1>
          <button type="button" onClick={closehandle}>
            <X size={50} />
          </button>
        </div>

        <label htmlFor="nama">Nama Lengkap</label>
        <input onChange={e => setname(e.currentTarget.value)} autocomplete='off' className="userform" type="text" name="nama" id="nama" required />

        <label htmlFor="email">Email</label>
        <input onChange={e => setemail(e.currentTarget.value)} autocomplete='off' className="userform" type="email" name="email" id="email" required />

        <label htmlFor="nomer">Nomer Telepon</label>
        <input onChange={e => setnomor(e.currentTarget.value)} autocomplete='off' className="userform" type="number" name="nomer" id="nomer" required />

        <button className={"text-2xl self-center border-4 rounded-[18px] px-3 py-1.5 bg-zinc-900 text-zinc-50 " + open.className}>
          Konfirmasi
        </button>
      </motion.form>
    </Backdrop>
  )}
</AnimatePresence>
    )
}