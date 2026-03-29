import { Manrope } from "next/font/google";
const manrope = Manrope({})



export const metadata = {
    title: "Result",
    description: "An e-commerce portfolio made by devano yudhistira",
};

export default function Layout({ children }) {
    return (<main className={"mt-19 py-0.5 pb-30 overflow-x-hidden  " + manrope.className} >

        {children}
    </main>)
}