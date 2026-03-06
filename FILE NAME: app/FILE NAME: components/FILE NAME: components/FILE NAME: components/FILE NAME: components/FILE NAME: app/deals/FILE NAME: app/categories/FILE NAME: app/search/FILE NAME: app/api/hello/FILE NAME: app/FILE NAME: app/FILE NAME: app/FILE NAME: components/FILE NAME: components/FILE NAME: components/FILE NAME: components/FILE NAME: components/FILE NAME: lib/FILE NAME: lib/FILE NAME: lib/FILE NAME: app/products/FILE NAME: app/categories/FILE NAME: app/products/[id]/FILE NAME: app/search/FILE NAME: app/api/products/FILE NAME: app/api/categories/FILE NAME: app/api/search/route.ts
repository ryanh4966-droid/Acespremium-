import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter((p) =>
    p.title.toLowerCase().includes(q)
  );

  return NextResponse.json({
    success: true,
    query: q,
    count: results.length,
    data: results,
  });
}
