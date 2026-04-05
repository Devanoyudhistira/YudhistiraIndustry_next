"use server";

import supabase from "@/app/supabase/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const imageurl =
  "https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/productimage/";

export async function createaction(prev, formdata) {
  const cookie = await cookies();
  const image = formdata.get("imageinput");
  const nama = formdata.get("nama");
  const harga = formdata.get("price");
  const stock = formdata.get("stock");
  const descproduct = formdata.get("description");
  const extension = image.name.split(".").at(-1);
  const imagevalidate = ["image/jpeg", "image/png", "image/webp"];
  if (image.size > 6291456) {
    redirect(`/admin/inventory/create/failed?error=imagetobig`);
  }

  if (!image || image.size === 0) {
    redirect(`/admin/inventory/create/failed?error=imagemissing`);
  }

  if (!imagevalidate.includes(image.type)) {
    redirect(`/admin/inventory/create/failed?error=invalidtype`);
  }

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
      harga: harga,
      jumlah: stock,
      Product_image: `${imageurl}${finalname}`,
      product_number: 0,
      description: descproduct,
    })
    .select();

  if (error) {
    redirect(`/admin/inventory/create/failed`);
  }
  const imageup = await supabase.storage
    .from("YudhistiraIndrusties")
    .upload(`productimage/${finalname}`, image);

  revalidatePath("/admin/inventory");
  redirect(`/admin/inventory/create/success/${data[0].id}`);
}

export async function update(prev, formdata) {
  const image = formdata.get("imageinput");
  const nama = formdata.get("nama");
  const harga = formdata.get("price");
  const stock = formdata.get("stock");
  const id = formdata.get("id");
  const descproduct = formdata.get("description");
  const extension = image.name.split(".").at(-1);
  const imagevalidate = ["image/jpeg", "image/png", "image/webp"];
  if (image.size > 6291456) {
    redirect(`/admin/inventory/create/failed?error=imagetobig`);
  }

  if (!image || image.size === 0) {
    redirect(`/admin/inventory/create/failed?error=imagemissing`);
  }

  if (!imagevalidate.includes(image.type)) {
    redirect(`/admin/inventory/create/failed?error=invalidtype`);
  }
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
  const previmage = (
    await supabase
      .from("product_demo")
      .select("Product_image")
      .eq("id", id)
      .single()
  ).data;

  const { data, error } = await supabase
    .from("product_demo")
    .update({
      nama_barang: nama,
      harga: harga,
      jumlah: parseFloat(stock),
      Product_image: `${image instanceof File && image.size > 0 ? imageurl + finalname : previmage.Product_image}`,
      description: descproduct,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    redirect(`/admin/inventory/update/${id}/failed`);
  }
  const res = await fetch(previmage.Product_image);
  const blob = await res.blob();

  await supabase.storage
    .from("YudhistiraIndustries")
    .remove([
      `productimage/${previmage.Product_image.split("/").at(-1).trimEnd()}`,
    ]);
  const imageup = await supabase.storage
    .from("YudhistiraIndrusties")
    .upload(
      `productimage/${finalname}`,
      image instanceof File && image.size > 0 ? image : blob,
    );
  if (imageup.error) {
    console.log(imageup.error);
    redirect(`/admin/inventory/update/${data[0].id}/failed`);
  }

  revalidatePath("/admin/inventory");
  redirect(`/admin/inventory/update/${data[0].id}/success`);
}
