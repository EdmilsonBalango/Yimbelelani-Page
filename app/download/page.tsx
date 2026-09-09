"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Monitor, Apple } from "lucide-react";
import { useEffect, useState } from "react";

const playStore = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "https://play.google.com/store/apps/details?id=com.yimbelelani";
const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/idYOUR_APP_ID";

export default function DownloadPage() {
  const [detectedPlatform, setDetectedPlatform] = useState<"windows" | "macos" | "android" | "ios" | "unknown">("unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || "";
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isWindows = /Windows/i.test(userAgent);
    const isMac = /Mac/i.test(userAgent) || navigator.platform === "MacIntel";

    if (isAndroid) {
      setDetectedPlatform("android");
      window.location.href = playStore;
      return;
    }

    if (isIOS) {
      setDetectedPlatform("ios");
      window.location.href = appStore;
      return;
    }

    if (isWindows) {
      setDetectedPlatform("windows");
      return;
    }

    if (isMac) {
      setDetectedPlatform("macos");
      return;
    }

    setDetectedPlatform("unknown");
  }, []);

  const recommendedLabel =
    detectedPlatform === "windows"
      ? "Recommended for your Windows PC"
      : detectedPlatform === "macos"
        ? "Recommended for your Mac"
        : "Choose the installer for your computer";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12">
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#0a5a63]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-12 h-72 w-72 rounded-full bg-[#f4a72e]/15 blur-3xl" />
      <Link href="/" className="absolute left-5 top-6 inline-flex items-center gap-2 text-sm font-bold text-[#0a5a63] transition hover:gap-3 sm:left-8 sm:top-8">
        <ArrowLeft className="h-4 w-4" /> Yimbelelani
      </Link>

      <section className="relative w-full max-w-xl text-center">
        <span className="mb-10 inline-block rounded-[30px] bg-[#0a5a63] px-8 py-5">
          <Image src="/logo.png" alt="Yimbelelani logo" width={78} height={78} className="mx-auto" priority />
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-[#0f1f22] sm:text-5xl">Download for your device</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
          {recommendedLabel}
        </p>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <a
            href="/Download/Yimbelelani_0.1.0_x64_en-US.msi"
            download
            className={`group flex items-center justify-center gap-3 rounded-[14px] px-5 py-4 text-left shadow-[0_12px_26px_rgba(6,54,59,.18)] transition hover:-translate-y-1 ${
              detectedPlatform === "windows"
                ? "bg-[#0a5a63] text-white hover:bg-[#06363b]"
                : "border border-[var(--line)] bg-white text-[#0f1f22] hover:border-[#0a5a63]/40"
            }`}
          >
            <Monitor className="h-7 w-7 shrink-0" />
            <span className="flex-1">
              <small className={`block text-xs ${detectedPlatform === "windows" ? "text-white/75" : "text-[var(--muted)]"}`}>
                {detectedPlatform === "windows" ? "Recommended for" : "Download for"}
              </small>
              <strong className="block text-base">Windows (MSI)</strong>
            </span>
          </a>

          <a
            href="/Download/Yimbelelani_0.1.0_aarch64.dmg"
            download
            className={`group flex items-center justify-center gap-3 rounded-[14px] px-5 py-4 text-left shadow-[0_12px_26px_rgba(6,54,59,.08)] transition hover:-translate-y-1 ${
              detectedPlatform === "macos"
                ? "bg-[#0a5a63] text-white hover:bg-[#06363b]"
                : "border border-[var(--line)] bg-white text-[#0f1f22] hover:border-[#0a5a63]/40"
            }`}
          >
            <Apple className="h-7 w-7 shrink-0" />
            <span className="flex-1">
              <small className={`block text-xs ${detectedPlatform === "macos" ? "text-white/75" : "text-[var(--muted)]"}`}>
                {detectedPlatform === "macos" ? "Recommended for" : "Download for"}
              </small>
              <strong className="block text-base">macOS (DMG)</strong>
            </span>
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
          <Download className="h-4 w-4 text-[#0e6f7a]" /> Your selected installer will begin downloading.
        </p>
      </section>
    </main>
  );
}
