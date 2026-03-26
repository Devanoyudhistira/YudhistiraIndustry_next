import { redirect } from "next/navigation"
import { createClient } from "../supabase/server"
import Navigation from "../components/admin/navigation"
import { Montserrat } from "next/font/google"
import logout from "../actions/login/logout"

const montserrat = Montserrat({})

export const metadata = {
  title: "Admin-page",
  description: "An admin dashboard for yudhistira industry",
};

export default async function Adminlayout({ children }) {

    
    const supabase = await createClient()

    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
        redirect("/")
    }
    return (
        <>
            <Navigation logout={logout} />
            <main className={"mt-19 py-0.5 pb-30 overflow-x-hidden  " + montserrat.className} >

                {children}
            </main>
        </>
    )
}