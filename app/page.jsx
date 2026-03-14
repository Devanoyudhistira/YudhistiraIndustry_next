import Image from "next/image";
import { createClient } from "./supabase/server";

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.from("product_demo").select("*")
  console.log(data)
  return (
    <>
      {
        data.map(e => 
          <h1 key={e.id} > {e.nama_barang} </h1>
        )
      }
    </>
  );
}
