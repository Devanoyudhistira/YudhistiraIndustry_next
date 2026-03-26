"use server";
import { NextResponse } from "next/server";
import { createClient } from "@/app/supabase/server";
import { redirect } from "next/navigation";
export async function POST(req) {
  const supabase = await createClient();
  const body = await req.json();

  // Example: check payment status
  console.log(body)
  const status = body.transaction_status;
  const orderId = body.order_id;
  const customername = body.customer_details.full_name;
  const customeremail = body.customer_details.email;
  const customernumber = body.customer_details.phone;
  const grossprice =  body.gross_amount

  if (status !== "pending") {
    const { error } = await supabase.from("invoice_new").insert({
      orderid: orderId,
      email: customeremail,
      nama: customername,
      nomor_hp: customernumber,
      status: status,
      pembayaran:grossprice
    });
  }

  redirect("/")
  
  return NextResponse.json(body.fraud_status);
}
