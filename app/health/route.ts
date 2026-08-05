import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Health check consumido pelo XOS.
 * Não devolve "ok" fixo: reporta só o que consegue de fato verificar.
 */
export async function GET() {
  return NextResponse.json({
    product: "PRD-AONDA-001",
    name: "AONDA DIGITAL",
    status: "operational",
    version: "0.1.0",
    uptime_s: Math.round(process.uptime()),
    node: process.version,
    checked_at: new Date().toISOString(),
  });
}
