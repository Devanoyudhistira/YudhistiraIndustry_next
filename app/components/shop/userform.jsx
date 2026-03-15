"use client"

import purchase from "@/app/actions/purchase/purchase"

export default function Userform({price,productname,id}){
    return(
        <form onSubmit={e => purchase(e,price,productname,id,"namapembeli","emailpembeli","nomer hp pembeli") } >

        </form>
    )
}