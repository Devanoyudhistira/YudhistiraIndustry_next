import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Shopcard } from "./components/shop/productcard";
import supabase from "./supabase/supabase";
import { createClient } from "./supabase/server";
import Popularitem from "./components/shop/popularitem";
import moment from "moment";
import Newestitem from "./components/shop/newestitem";
import convertToMoney from "./function/convert";
import Link from "next/link";

export default async function Home() {
  const server = await createClient()
  const { data } = await supabase.from("product_demo").select("*").order("product_number", { ascending: false }).limit(5)
  const { data: terbaru } = await supabase.from("product_demo").select("nama_barang,harga,created_at,Product_image,id").order("created_at", { ascending: false }).limit(3)
  const { data: alldata } = await supabase.from("product_demo").select("*").order("nama_barang", { ascending: false })
  const { data: { session } } = await server.auth.getSession()
  return (
    <>
      <Navigation user={session} />
      <div className="mt-15 w-full px-3" >        
          <h1 className="text-2xl font-semibold" > Most Popular </h1>                
        <div className="w-full overflow-auto gap-x-6 mt-3 grid grid-flow-col scrollbar" >
          {
            data.map((e, i) =>
              <Popularitem id={e.id} harga={convertToMoney(e.harga)} key={e.id} urutan={i} terjual={e.product_number} stock={e.jumlah} gambar={e.Product_image} tanggal={moment(e.created_at).format("MMM DD YY")} nama={e.nama_barang} />
            )
          }
        </div>
      </div>

      <section className="w-full rounded-md pb-5 px-4 mt-4" >
        <h1 className="text-zinc-950 text-2xl font-semibold" > Newcomers </h1>
        <div className="w-full px-3 py-3 overflow-auto gap-x-6 grid grid-flow-col mt-2" >
          {
            terbaru.map((e, i) =>
              <Newestitem id={e.id} nama={e.nama_barang} harga={convertToMoney(e.harga)} tanggal={moment(e.created_at).startOf('').fromNow()} image={e.Product_image} key={e.id} />
            )
          }
        </div>
      </section>
      <section className="w-full mt-8 px-3 bg-zinc-50 " >
        <h1 className="text-2xl font-semibold capitalize" > Recommended For you </h1>
        <div className="w-full py-5 overflow-x-hidden overflow-y-auto place-items-center gap-y-5 gap-x-13 grid px-6 grid-cols-2 mt-2" >
          <Shopcard data={alldata} />
        </div>
      </section>

    </>
  );
}
