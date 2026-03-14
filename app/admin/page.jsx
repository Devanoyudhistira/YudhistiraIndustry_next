import { createClient } from "../supabase/server"

export default async function Admin(){
    const supabase = await createClient()
    return(
        <h1>ini adalah admin</h1>
    )
}