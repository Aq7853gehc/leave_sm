import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { result: "Success to make routes" },
    { status: 201 }
  );
}
