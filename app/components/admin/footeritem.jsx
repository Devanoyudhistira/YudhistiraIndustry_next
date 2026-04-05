"use client"
import * as motion from "motion/react-client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footeritem({ text, icon }) {
    const [tapped, setTapped] = useState(false);

    const path = usePathname().split("/").pop()


    
    
    return (
        <Link href={`/admin/${text}`} >
            <motion.button
                whileHover={{ scale: 1.1, color: "#59168b" }}
                whileTap={{ scale: 1.1, color: "#59168b" }}
                transition={{ type: "spring",duration:'0.05', stiffness: 300}}
                onTapStart={() => setTapped(true)}
                onTap={() => {setTapped(false)}}
                onTapCancel={() => setTapped(false)}
                className={`footerbutton ${path === text ?  "text-purple-400" : "text-gray-900"} `}
            >
                <motion.span
                    animate={tapped ? { y: -12,rotate:40} : { y: 0 }}
                    transition={{ type: "spring",stiffness: 300}}
                >
                    {icon}
                </motion.span>
                {text}
            </motion.button>
        </Link>)
}