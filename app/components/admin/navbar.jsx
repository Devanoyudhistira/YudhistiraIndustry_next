import { X } from "react-bootstrap-icons";

export default function Navbar({logout,closefunc}){
    return(
        <div className="w-[60vw] h-screen pb-10 px-2 flex flex-col items-stretch justify-between fixed top-0 right-0 bg-zinc-950 z-104" >            

            <button className=" self-end" onClick={closefunc} > <X size={80} color="white"/> </button>
            <form className="self-center w-full " action={logout}>
                <button type="submit" className="border-red-500 hover:scale-90 focus:scale-80 rounded-xl border-2 bg-red-600 w-full h-max  py-1 text-2xl font-black transition-all" >
                    Logout
                </button>
            </form>

        </div>
    )
}