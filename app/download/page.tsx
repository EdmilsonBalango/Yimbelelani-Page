"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { useEffect } from "react";

const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/idYOUR_APP_ID";
const playStore = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? `https://play.google.com/store/apps/details?id=com.yourcompany.yourapp`;

export default function DownloadPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = playStore;
      return;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
      window.location.href = appStore;
    }
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12">
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#0a5a63]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-12 h-72 w-72 rounded-full bg-[#f4a72e]/15 blur-3xl" />
      <Link href="/" className="absolute left-5 top-6 inline-flex items-center gap-2 text-sm font-bold text-[#0a5a63] transition hover:gap-3 sm:left-8 sm:top-8">
        <ArrowLeft className="h-4 w-4" /> Yimbelelani
      </Link>

      <section className="relative w-full max-w-lg text-center">
        <span className="inline-block rounded-[30px] bg-[#0a5a63] px-8 py-5 mb-10">
            <Image src="/logo.png" alt="Yimbelelani logo" width={78} height={78} className="mx-auto  " priority />
        </span>
        
        <h1 className="text-4xl font-bold tracking-tight text-[#0f1f22] sm:text-5xl">Get our mobile app</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-[var(--muted)]">Download the application for your device and keep Xitswa hymns close wherever you worship.</p>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <a href={appStore} className="group flex items-center justify-center gap-3 rounded-[14px] bg-[#0a5a63] px-5 py-4 text-left text-white shadow-[0_12px_26px_rgba(6,54,59,.18)] transition hover:-translate-y-1 hover:bg-[#06363b]">
            <Image src="/apple.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0" /><span><small className="block text-xs text-white/75">Download on the</small><strong className="block text-base">App Store</strong></span>
          </a>
          <a href={playStore} className="group flex items-center justify-center gap-3 rounded-[14px] border border-[var(--line)] bg-white px-5 py-4 text-left text-[#0f1f22] shadow-[0_12px_26px_rgba(6,54,59,.08)] transition hover:-translate-y-1 hover:border-[#0a5a63]/40">
            <Image src="/playstore.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0" /><span><small className="block text-xs text-[var(--muted)]">Get it on</small><strong className="block text-base">Google Play</strong></span>
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--muted)]"><Download className="h-4 w-4 text-[#0e6f7a]" /> Your download should begin automatically on mobile.</p>
      </section>
    </main>
  );
}
