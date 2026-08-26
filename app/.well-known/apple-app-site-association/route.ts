import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: process.env.APPLE_APP_ID, 
          components: [
            {
              "/": "/download*",
            },
          ],
        }
      ]
    }
  }, { headers: { "Cache-Control": "public, max-age=3600" } });
}
