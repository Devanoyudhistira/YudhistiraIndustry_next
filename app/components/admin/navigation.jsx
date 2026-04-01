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

export default function Navigation({ logout }) {
    const pathname = usePathname()
    const lastSegment = pathname.split("/").filter(Boolean).pop()
    const routename = pathname.split("/").at(-2) === "update"
    const [opennav, setoepennav] = useState(false)
    return (
        <footer className="fixed bottom-0 gap-2 z-200 left-0 bg-zinc-100 w-screen h-14 grid grid-flow-col " >
            <Link href={"admin/home"} > <motion.button whileHover={{ scale: 1.1, color: "#05df72" }} whileTap={{ scale: 0.8 }} className="footerbutton " >
                <motion.span whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}>  <House />  </motion.span>Home
            </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.1, color: "#05df72" }} whileTap={{ scale: 0.8 }} className="footerbutton" >
                <motion.span whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, color: "#05df72" }}> <ArchiveFill /> </motion.span> Inventory   </motion.button>

            <motion.button whileHover={{ scale: 1.1, color: "#05df72" }} whileTap={{ scale: 0.8 }} className="footerbutton " >
                <motion.span whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}>  <Receipt />  </motion.span>Invoices
            </motion.button>

            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="footerbutton text-red-500" onClick={logout} > <ArrowLeft />  Log out  </motion.button>
        </footer>
    )
}