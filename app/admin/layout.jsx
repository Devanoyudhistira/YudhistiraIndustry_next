import { redirect } from "next/navigation"
import { createClient } from "../supabase/server"

export default async function Adminlayout({children}){
    const supabase = await createClient()

    const {data:{session}} = await supabase.auth.getSession()
    if(!session?.user){
        redirect("/")
    }
    return(
        <main>
            <h1> {session?.user ? "anda adalah admin" : "anda bukan admin"} </h1>
            {children}
        </main>
    )
}