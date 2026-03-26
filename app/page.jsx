import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Inter } from "next/font/google";
import { Shopcard } from "./components/shop/productcard";
import supabase from "./supabase/supabase";


const inter = Inter({})
export default async function Home() {  

  const { data } = await supabase.from("product_demo").select("*") 
  return (
    <>
     <Navigation/>
     <h1 className={"text-3xl mt-15 font-black  " + inter.className } > Only For You </h1>  
     <div className="grid grid-cols-2 mt-2 -ml-2 gap-2 w-screen justify-items-center h-auto overflow-x-hidden overflow-y-auto" >
       <Shopcard data={data} />
    </div>  
    </>
  );
}
