"use client"
import { ArrowLeft } from "react-bootstrap-icons"
import { useRouter } from "next/navigation";

export default function Buttonundo() {
  const router = useRouter()
  const undo = () => {
    router.push("/");
  }
  return (
    <button onClick={undo} className="cursor-pointer" > <ArrowLeft size={30} /></button>
  )
}