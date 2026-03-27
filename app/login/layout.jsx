import "@/css"
import { Open_Sans } from "next/font/google"

const sans = Open_Sans({})

export const metadata = {
    title: "Admin-Login",
    description: "A login page for admin",
};


export default function Loginlayout({children}){
    return (
    <main  className={"w-screen h-screen flex justify-center items-center  " + sans.className } >
        {children}
    </main>)
}