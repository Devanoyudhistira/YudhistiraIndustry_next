"use server";

import supabase from "@/app/supabase/supabase";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(Request) {
  const { id } = await Request.json();

  const { data } = await supabase
    .from("product_demo")
    .delete()
    .eq("id", id)
    .select().single();

 const {error} = await supabase.storage
    .from("YudhistiraIndrusties")
    .remove([`productimage/${data.Product_image.split("/").at(-1).trimEnd() }`]);
  revalidatePath("/admin/inventory");
  console.log(`productimage/${data.Product_image.split("/").at(-1).trimEnd() }`)
  return NextResponse.json({ success: true, hasil: data ,immage:error});
}

