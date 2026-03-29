import { BoxArrowLeft } from "react-bootstrap-icons";
import { BoxArrowRight } from "react-bootstrap-icons"
import { X } from "react-bootstrap-icons";
import Navitem from "./navitem";
import { Receipt } from "react-bootstrap-icons";
import { Archive } from "react-bootstrap-icons";
import { HouseDoor } from "react-bootstrap-icons";
import { Cart4 } from "react-bootstrap-icons";

export default function Navbar({ logout, closefunc }) {
    return (
        <div className="w-[60vw] h-[93vh] px-2 flex flex-col items-stretch justify-between fixed top-0 left-0 bg-zinc-50 shadow-2xs shadow-zinc-900 z-104" >
            <div className="flex flex-col" >
                <button className=" self-end" onClick={closefunc} > <X size={60} color="black" /> </button>
                <div className="flex flex-col w-full gap-2" >
                    <Navitem close={closefunc} location={"/admin/home"} nama={<span className="flex gap-2 items-center" > <HouseDoor/> home</span>} />
                    <Navitem close={closefunc} location={"/admin/inventory"} nama={<span className="flex gap-2 items-center" > <Archive/> inventory </span>} />
                    <Navitem close={closefunc} location={"/admin/invoices"} nama={<span className="flex gap-2 items-center" > <Receipt/> invoices</span> } />
                    <Navitem close={closefunc} location={"/"} nama={<span className="flex gap-2 items-center" > <Cart4/> Shopping Page</span> } />
                </div>
            </div>
            <form className="self-center justify-self-end items-center justify-center mb-2 flex w-full bg-zinc-50 border border-zinc-100 " action={logout}>
                <button type="submit" className="border-red-500 flex  gap-2 items-center justify-center hover:scale-90 focus:scale-80 rounded-xl border-2 bg-red-600 w-max h-max  py-2 px-2 text-xl font-black transition-all self-center" >
                    <BoxArrowLeft size={27} /> Logout
                </button>
            </form>

        </div>
    )
}