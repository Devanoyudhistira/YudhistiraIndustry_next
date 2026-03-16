"use server";

import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

export async function POST(Request) {
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
    emailpembeli,
    nomorpembeli,
  } = await Request.json();

  let parameter = {
    transaction_details: {
      order_id: Math.floor(Math.random() * 10),
      gross_amount: harga * quantity,
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

  const response = await snap.createTransaction(parameter);

  return NextResponse.json(response.token);
}
