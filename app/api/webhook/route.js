"use server";
import { NextResponse } from "next/server";
import supabase from "@/app/supabase/supabase";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createSessionCookie } from "@/app/function/signature";
export async function POST(req) {
  const cookie = await cookies()
  const body = await req.json();

  const status = body.transaction_status;
  const orderId = body.order_id;
  const customername = body.customer_details.full_name;
  const customeremail = body.customer_details.email;
  const customernumber = body.customer_details.phone;
  const grossprice = body.gross_amount;

  const { error } = await supabase
    .from("invoice_new")
    .upsert(
      {
        orderid: orderId,
        email: customeremail,
        nama: customername,
        nomor_hp: customernumber,
        status: status,
        pembayaran: grossprice,
      },
      {
        onConflict: "orderid",
      },
    )    

  const dataid = await supabase
    .from("invoice_new")
    .select("product_id,quantity")
    .eq("orderid", orderId).single()

  if (error) {
    console.log(error);
    return;
  }
  if (status === "settlement") {    
    await supabase.rpc("increment_purchase_count", { product_id: dataid.data.product_id });
    await supabase.rpc("reduce_stock_count", { product_id: dataid.data.product_id,pengurangan:dataid.data.quantity });
  }

  return NextResponse.json(body.fraud_status);
}
