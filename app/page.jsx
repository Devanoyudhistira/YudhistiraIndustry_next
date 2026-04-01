import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Shopcard } from "./components/shop/productcard";
import supabase from "./supabase/supabase";
import { createClient } from "./supabase/server";
import Popularitem from "./components/shop/popularitem";
import moment from "moment";
import Newestitem from "./components/shop/newestitem";
import convertToMoney from "./function/convert";

export default async function Home() {
  const server = await createClient()
  const { data } = await supabase.from("product_demo").select("*").order("product_number", { ascending: false }).limit(3)
  const { data: terbaru } = await supabase.from("product_demo").select("*").order("created_at", { ascending: false }).limit(5)
  const { data: { session } } = await server.auth.getSession()
  return (
    <>
      <Navigation user={session} />
      <div className="mt-15 w-full px-3 " >
        <h4 className="mt-15 font-semibold text-xl" > Welcome to the YudhistiraIndustry </h4>
        <p className="text-md font-light  px-2" > Sebuah tempat dimana anda bisa menemukan apa saja jadi siapa saja.Nikmati petualangan anda di <span className="font-bold text-green-400" > YudhistiraIndustry </span> </p>
      </div>
      <div className="mt-5 w-full px-3" >
        <h1 className="text-2xl font-semibold" > Most Popular </h1>
        <div className="w-full overflow-auto gap-x-2 grid grid-flow-col scrollbar" >
          {
            data.map((e, i) =>
              <Popularitem harga={convertToMoney(e.harga)} key={e.id} urutan={i} terjual={e.product_number} stock={e.jumlah} gambar={e.Product_image} tanggal={moment(e.created_at).format("MMM DD YY")} nama={e.nama_barang} />
            )
          }
        </div>
      </div>
      <section className="w-full overflow-auto gap-x-2 grid grid-flow-col bg-sky-800 py-5 px-4" >
        {
          terbaru.map((e, i) =>
            <Newestitem nama={e.nama_barang} harga={ convertToMoney(e.harga) } tanggal={moment(e.created_at).startOf('').fromNow()} image={e.Product_image} key={e.id} />
          )
        }
      </section>
      
    </>
  );
}
