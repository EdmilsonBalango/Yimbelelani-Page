import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: process.env.APPLE_APP_ID ?? "TEAM_ID.com.yimbelelani.app",
          paths: ["*"]
        }
      ]
    }
  }, { headers: { "Cache-Control": "public, max-age=3600" } });
}
