"use server";

import supabase from "@/app/supabase/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createaction(prev,formdata) {
    const image = formdata.get("imageinput")
    const nama = formdata.get("nama")
    const harga = formdata.get("harga")
    const stock = formdata.get("nama")
    const descproduct = formdata.get("nama")
  // const { data, error } = await supabase
  //   .from("product_demo")
  //   .insert([
  //     {
  //       nama_barang: nama,
  //       harga: harga,
  //       jumlah: stock,
  //       satuan: "kg",
  //       Product_image: image,
  //       product_number: 0,
  //       description:descproduct
  //     },
  //   ])
  //   .select();

  console.log(image)
  revalidatePath('/admin/inventory')
  return { success: true, message: 'barang selesai dibuat' }
  redirect('/admin/inventory')
}
