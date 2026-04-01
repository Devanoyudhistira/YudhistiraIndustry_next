import { redirect } from "next/navigation"
import { createClient } from "../supabase/server"
import { Manrope, Open_Sans } from "next/font/google"
import logout from "../actions/login/logout"

const montserrat = Manrope({})

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
            {/* <Navigation logout={logout} /> */}
            <main className={"mt-5 py-0.5 overflow-x-hidden overflow-y-auto scroll-smooth " + montserrat.className} >

                {children}
            </main>
        </>
    )
}