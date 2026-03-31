"use server";

import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";
import supabase from "@/app/supabase/supabase";
import { cookies } from "next/headers";

export async function POST(Request) {
  const cookie = await cookies();
  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.NEXT_MIDTRANS_SERVER,
    clientKey: process.env.NEXT_MIDTRANS_CLIENT,
  });
  const {
    produk,
    harga,
    quantity,
    id,
    namapembeli,
    emailpembeli,
    nomorpembeli,
    grossprice,
  } = await Request.json();
  let parameter = {
    transaction_details: {
      order_id: Math.ceil(Math.floor(Math.random() * 1000).toString() + id),
      gross_amount: grossprice,
    },
    item_details: {
      name: produk,
      id: id,
      price: harga,
      quantity: quantity,
    },
    customer_details: {
      first_name: namapembeli,
      email: emailpembeli,
      phone: nomorpembeli,
    },
  };

  cookie.set("pembayaran",parameter.transaction_details.order_id)
  cookie.set("orderid",parameter.transaction_details.order_id)

  const { error } = await supabase.from("invoice_new").upsert(
    {
      orderid: parameter.transaction_details.order_id,
      email: parameter.customer_details.email,
      nama: parameter.customer_details.first_name,
      nomor_hp: parameter.customer_details.phone,
      status: "pending",
      pembayaran: parameter.transaction_details.gross_amount,
      nama_barang: parameter.item_details.name,
      product_id: id,
    },
    {
      onConflict: "orderid",
    },
  );

  if (error) console.log(error);
  const response = await snap.createTransaction(parameter);
  return NextResponse.json(response.token);
}
