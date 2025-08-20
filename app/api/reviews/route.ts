import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY; // add this to your .env.local
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

  console.log(url);

  const res = await fetch(url);
  const data = await res.json();

  if (!data.result || !data.result.reviews) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  return NextResponse.json({ reviews: data.result.reviews });
}
