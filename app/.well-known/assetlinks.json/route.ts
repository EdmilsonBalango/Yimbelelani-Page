import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: process.env.ANDROID_PACKAGE_NAME,
        sha256_cert_fingerprints: [process.env.ANDROID_SHA256_CERT_FINGERPRINT],
      },
    },
  ], { headers: { "Cache-Control": "public, max-age=3600" } });
}
