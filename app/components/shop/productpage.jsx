"use client"

import { useState } from "react"
import Productdetail from "./productdetail"
import Userform from "./userform"
import Backdrop from "../backdrop"

export default function Productpage({ data }) {
    const [openuser, setopenuser] = useState(false)
    const [quantity, setquantity] = useState(1) 
    const [grossprice,setgrossprice] = useState(data.harga * quantity)     
    return (
        <>
            <Productdetail data={data}  setprice={setgrossprice}  quantity={quantity} setquantity={setquantity} clickhandler={() => setopenuser(true)} price={grossprice}  />
            <Userform closecondition={openuser} closehandle={() => setopenuser(false)} id={data.id} quantity={quantity} />
        </>
    )
}