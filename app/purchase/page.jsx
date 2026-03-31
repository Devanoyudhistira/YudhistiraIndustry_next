import { cookies } from "next/headers"

export default async function Success() {
    const cookie = await cookies()
    return (
        <>
            <h1>selamat pembelian success</h1>
            <h1> {cookie.get("orderid").value} </h1>
        </>)
}