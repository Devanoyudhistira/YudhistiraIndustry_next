import { redirect } from "next/navigation"
import { createClient } from "../supabase/server"
import Navigation from "../components/admin/navigation"
import { Montserrat } from "next/font/google"
import logout from "../actions/login/logout"

const montserrat = Montserrat({})

export default async function Adminlayout({ children }) {
    const supabase = await createClient()

    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
        redirect("/")
    }
    return (
        <>
            <Navigation logout={logout} />
            <main className={"mt-16 py-0.5 overflow-hidden  " + montserrat.className} >

                {children}
            </main>
        </>
    )
}