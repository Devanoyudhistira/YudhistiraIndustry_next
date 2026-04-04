"use server";
import { NextResponse } from "next/server";
import supabase from "@/app/supabase/supabase";
import { redirect } from "next/navigation";
import { createSessionCookie } from "@/app/function/signature";
export async function POST(req) {
  const body = await req.json();  

  const status = body.transaction_status;
  const orderId = body.order_id;
  const customername = body.customer_details.full_name;
  const customeremail = body.customer_details.email;
  const customernumber = body.customer_details.phone;
  const grossprice = body.gross_amount;
  const vanumber =  body.va_numbers.va_number

const response = await fetch("https://api.sandbox.midtrans.com/v2/charge", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic " + Buffer.from("SB-Mid-server-9Wl_Ad0TXWGwu-F0X9qm65xE" + ":").toString("base64"),
  },
  body: JSON.stringify({
    payment_type: "qris",
    transaction_details: {
      order_id: orderId,
      gross_amount: grossprice
    }
  })
}).then(res => res.text()).then(result => console.log(result)) ;



  const { error } = await supabase.from("invoice_new").upsert(
    {
      orderid: orderId,
      email: customeremail,
      nama: customername,
      nomor_hp: customernumber,
      status: status,
      pembayaran: grossprice,
      vaNumber:vanumber
    },
    {
      onConflict: "orderid",
    },
  );

  const dataid = await supabase
    .from("invoice_new")
    .select("product_id,quantity")
    .eq("orderid", orderId)
    .single();

  if (error) {
    console.log(error);
    return;
  }
  if (status === "settlement") {
    await supabase.rpc("increment_purchase_count", {
      product_id: dataid.data.product_id,
    });
    await supabase.rpc("reduce_stock_count", {
      product_id: dataid.data.product_id,
      pengurangan: dataid.data.quantity,
    });
  }

  return NextResponse.json(body.fraud_status);
}
