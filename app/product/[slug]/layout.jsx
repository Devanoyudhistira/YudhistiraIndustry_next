"use server"
import Buttonundo from "@/app/components/shop/button"
import { Inter } from "next/font/google"
import { ArrowLeft } from "react-bootstrap-icons"
const inter = Inter({})
export default async function Productlayout({ children }) {
    
  
    return (
        <main className="w-screen h-auto overflow-x-hidden" >
            <nav className="fixed top-0 left-0 w-screen bg-zinc-100 border-b-3 flex justify-between px-3 py-2" >
                <Buttonundo/>
                <h1 className={inter.className + " text-2xl font-bold"}> Product detail </h1>
            </nav>
            {children}
        </main>
    )
}