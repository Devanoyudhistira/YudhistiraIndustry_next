import { Manrope } from "next/font/google";
import { cookies } from "next/headers";
const manrope = Manrope({})



export const metadata = {
    title: "Result",
    description: "An e-commerce portfolio made by devano yudhistira",
};

export default async function Layout({ children }) {

    return (<main className={" py-2 overflow-x-hidden  " + manrope.className} >

        {children}
    </main>)
}