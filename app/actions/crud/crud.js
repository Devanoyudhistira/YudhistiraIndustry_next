"use server";

import supabase from "@/app/supabase/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createaction(prev, formdata) {
  const image = formdata.get("imageinput");
  const nama = formdata.get("nama");
  const harga = formdata.get("price");
  const stock = formdata.get("stock");
  const descproduct = formdata.get("description");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;

  const { data, error } = await supabase
    .from("product_demo")
    .insert({
      nama_barang: nama,
      harga: parseFloat(harga),
      jumlah: parseFloat(stock),
      satuan: "kg",
      Product_image: `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/productimage/${finalname}`,
      product_number: 0,
      description: descproduct,
    })
    .select();

  if (error) {
    console.log(error);
    redirect(`/admin/inventory/create/failed`);
  }
  const imageup = await supabase.storage
    .from("YudhistiraIndrusties")
    .upload(`productimage/${finalname}`, image);
  if (imageup.error) {
    console.log(imageup.error);
  }

  revalidatePath("/admin/inventory");
  redirect(`/admin/inventory/create/success/${data[0].id}`);
}
