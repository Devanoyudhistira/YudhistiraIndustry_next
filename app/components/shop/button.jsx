"use client"
import { ArrowLeft } from "react-bootstrap-icons"
import { useRouter } from "next/navigation";

export default function Buttonundo(){
    const router =  useRouter()
    const undo = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }}
    return(
        <button onClick={undo} > <ArrowLeft size={30} /></button>
    )
}