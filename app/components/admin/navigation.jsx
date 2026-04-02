"use client"
import { useState } from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { House } from "react-bootstrap-icons";
import { Archive } from "react-bootstrap-icons";
import { ArchiveFill } from "react-bootstrap-icons";
import { Receipt } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import * as motion from "motion/react-client"
import Footeritem from "./footeritem";

export default function Navigation({ logout }) {
    const pathname = usePathname()
    const lastSegment = pathname.split("/").filter(Boolean).pop()
    const routename = pathname.split("/").at(-2) === "update"
    const [opennav, setoepennav] = useState(false)
    return (
        <footer className="fixed bottom-0 gap-2 z-200 left-0 bg-zinc-100 w-screen h-14 grid grid-flow-col " >
            <Footeritem icon={<House/>}  text={"home"} />
            <Footeritem icon={<Archive/>}  text={"inventory"} />
            <Footeritem icon={<Receipt/>}  text={"invoices"} />
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="footerbutton text-red-500" onClick={logout} > <ArrowLeft />  Log out  </motion.button>
        </footer>
    )
}