"use server";
import { NextResponse } from "next/server";
import supabase from "@/app/supabase/supabase";
import { redirect } from "next/navigation";
export async function POST(req) {
  const body = await req.json();

  const status = body.transaction_status;
  const orderId = body.order_id;
  const customername = body.customer_details.full_name;
  const customeremail = body.customer_details.email;
  const customernumber = body.customer_details.phone;
  const grossprice = body.gross_amount;

  const { error } = await supabase.from("invoice_new").upsert(
    {
      orderid: orderId,
      email: customeremail,
      nama: customername,
      nomor_hp: customernumber,
      status: "settlement",
      pembayaran: grossprice,      
    },
    {
      onConflict: "orderid",
    },
  );

  if (error) {
    console.log(error);
  }

  return NextResponse.json(body.fraud_status);
}
