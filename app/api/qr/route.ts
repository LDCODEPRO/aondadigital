import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://127.0.0.1:8080/instance/connect/aonda', {
      headers: {
        'apikey': 'AondaDigital_WAPI_Secret_Key_2026_Secure'
      },
      cache: 'no-store'
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
