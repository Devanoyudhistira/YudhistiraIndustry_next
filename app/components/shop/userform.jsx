"use client"
import { Inter, Open_Sans } from "next/font/google"
import { motion, AnimatePresence } from "motion/react"
import { X } from "react-bootstrap-icons"
import Backdrop from "../backdrop"
import { useState } from "react"
import Image from "next/image"
import convertToMoney from "@/app/function/convert"
import { parseIDR } from "@/app/function/numberformat"
import { ArrowRight } from "react-bootstrap-icons"
import { ClipLoader } from "react-spinners"

const inter = Inter({})
const open = Open_Sans({})

export default function Userform({ id, image, nama, harga, closehandle, closecondition, quantity, purchase }) {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [nomor, setnomor] = useState("")
  const [loading,setloading] = useState(false)

  return (

    <AnimatePresence  >
      {closecondition && (
        <motion.form
          key="form"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => {purchase(e, id, quantity, name, email, nomor);setloading(true) }}
          className="bg-zinc-100 -mt-10 shadow-[1px_1px_10px_black] w-[95vw] h-full px-2 py-1 flex flex-col fixed top-10 rounded-md gap-2">
          <div className="flex justify-between w-full items-center">
            <div>
              <h1 className={"text-2xl font-bold " + open.className}>
                Verifikasi
              </h1>
              <p className="text-xl font-semibold" >tolong isi data diri anda </p>
            </div>
            <button type="button" onClick={closehandle}>
              <X size={50} />
            </button>
          </div>
          <div className="flex w-full items-center px-2 gap-2 rounded-xl bg-linear-to-t from-purple-500 to-purple-600 py-2" >
            <Image alt="product name" width="500" className="w-20 h-20 object-center object-cover rounded-xl" height={500} src={image} ></Image>
            <div>
              <h1 className="text-xl font-semibold" > {nama} </h1>
              <h1 className="text-md font-semibold" > {convertToMoney( parseIDR(harga) * quantity )} </h1>
            </div>

          </div>
          <label htmlFor="nama" className="text-xl text-purple-900 font-semibold" >Nama Lengkap</label>
          <input onChange={e => setname(e.currentTarget.value)} autocomplete='off' className="userform" type="text" name="nama" id="nama" required />

          <label htmlFor="email" className="text-xl text-purple-900 font-semibold" >Email</label>
          <input onChange={e => setemail(e.currentTarget.value)} autocomplete='off' className="userform" type="email" name="email" id="email" required />

          <label htmlFor="nomer" className="text-xl text-purple-900 font-semibold" >Nomer Telepon</label>
          <input onChange={e => setnomor(e.currentTarget.value)} autocomplete='off' className="userform" type="number" name="nomer" id="nomer" required />

          <button disabled={loading} className={"text-4xl flex gap-3 items-center justify-center self-center transition rounded-md font-semibold w-full h-max py-3 bg-purple-500 text-purple-50  disabled:bg-purple-50 disabled:border-2 border-purple-400 " + open.className}>
           { !loading ? <span className="flex gap-3 items-center justify-center" > Konfirmasi <ArrowRight/></span> : <span className="flex gap-3 items-center justify-center" > loading <ClipLoader/> </span>}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}