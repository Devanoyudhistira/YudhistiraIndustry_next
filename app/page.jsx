import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Inter } from "next/font/google";
import { Shopcard } from "./components/shop/productcard";
import supabase from "./supabase/supabase";
import { createClient } from "./supabase/server";


const inter = Inter({})
export default async function Home() {  
  const server = await createClient()
  const { data } = await supabase.from("product_demo").select("*") 
  const {data:{session}} = await server.auth.getSession()
  return (
    <>
     <Navigation user={session} />
     <h1 className={"text-3xl mt-15 font-black  " + inter.className } > Only For You </h1>  
     <div className="grid grid-cols-2 mt-2 -ml-2 py-2 px-2 gap-x-2 gap-y-2.5 w-screen justify-items-center h-auto overflow-x-hidden overflow-y-auto" >
       <Shopcard data={data} />
    </div>  
    </>
  );
}
