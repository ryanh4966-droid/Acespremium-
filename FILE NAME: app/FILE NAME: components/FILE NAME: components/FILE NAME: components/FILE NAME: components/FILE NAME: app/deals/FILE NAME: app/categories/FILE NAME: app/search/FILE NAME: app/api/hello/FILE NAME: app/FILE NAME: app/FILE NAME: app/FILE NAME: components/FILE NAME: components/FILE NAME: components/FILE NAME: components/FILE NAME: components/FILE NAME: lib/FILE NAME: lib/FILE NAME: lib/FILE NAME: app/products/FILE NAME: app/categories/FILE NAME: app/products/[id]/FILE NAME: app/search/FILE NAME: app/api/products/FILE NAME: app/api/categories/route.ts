import { NextResponse } from "next/server";
import { categories } from "@/lib/categories";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: categories.length,
    data: categories,
  });
}
