"use server";

import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

export async function POST(Request) {
  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-9Wl_Ad0TXWGwu-F0X9qm65xE",
    clientKey: "SB-Mid-client-XBC9QGF0-LMTcWJr",
  });
  const { produk, harga, quantity,id,pembelidepan,pembelibelakang,emailpembeli,nomorpembeli } = await Request.json();
  let parameter = {
    transaction_details: {
      order_id: Math.random() * 10,
      gross_amount: harga,
    },
    item_details: {
      name: produk,
      id: id,
      price: harga * quantity,
      quantity: quantity,      
    },
    customer_details: {
      first_name: pembelidepan,
      last_name: pembelibelakang,
      email: emailpembeli,
      phone: nomorpembeli,
    },
  };

  const response = await snap.createTransaction(parameter);

  return NextResponse.json(response.token);
}
