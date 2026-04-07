import Invoicecreate from "@/app/components/admin/invoicecreate";
import supabase from "@/app/supabase/supabase";
import Link from "next/link";
import { ArrowLeft } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";

export default async function Page() {
    const { data } = await supabase.from("product_demo").select("id,nama_barang,harga,jumlah,Product_image")
    return (
        <div className="scroll-smooth">
            <nav className="w-screen h-11 fixed top-1 px-2  flex items-center justify-between" >
                <div className="flex items-center gap-2 text-2xl" >
                    <Link href={"/admin/invoices"} >
                        <ArrowLeft className="text-purple-800" />
                    </Link>
                    <h1 className="font-semibold" > Buat invoice </h1>
                </div>
            </nav>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-12 px-4 w-full" >
                {data.map(e =>
                    <Invoicecreate key={e.id} id={e.id} Product_image={e.Product_image} nama_barang={e.nama_barang} jumlah={e.jumlah} harga={e.harga} />
                )
                }
            </div>
        </div>
    )
}