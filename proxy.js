import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import supabase from "./app/supabase/supabase";

export default async function proxy(request) {
  const cookie = await cookies();
  const order = cookie.get("pembayaran");
  const pathname = request.nextUrl.pathname;

  if (order) {
    const { data, error } = await supabase
      .from("invoice_new")
      .select("*")
      .eq("orderid", order.value)
      .single();
    if (data && pathname === "/") {
      cookie.delete("pembayaran");
      return NextResponse.redirect(new URL("/purchase", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/purchase"],
};
