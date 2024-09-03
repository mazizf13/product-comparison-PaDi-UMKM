import { products } from "@/data/product";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}
