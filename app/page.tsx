"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BookOpen, Search, SlidersHorizontal, SunMoon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

type Locale = "en" | "pt";

const translations = {
  en: {
    nav: ["Features", "Screenshots", "Privacy"], download: "Download",
    tag: "Hymns in Xitswa", intro: "A hymnal for home and church", hero: <>Worship in <span className="text-[#0a5a63]">Xitswa</span>.<br />Read and sing <em className="text-[#f4a72e] not-italic">anywhere.</em></>,
    description: <> <strong>Yimbelelani</strong> is a digital hymnal designed to preserve and promote Christian hymns in <strong>Xitswa</strong>, a local language of Southern Mozambique. It includes translations of well-known hymns from <strong>Portuguese</strong>, presented in a clean and readable format.</>,
    badges: ["Fast search", "Adjustable text size", "Light & dark mode", "Distraction-free reading"], cta: "Explore the app",
    featuresTitle: "What you can do", featuresNote: "Made for focused worship", screenshotsTitle: "Screenshots", screenshotsNote: "A calm reading experience", privacyTitle: "Privacy Policy",
    features: [["Hymns in Xitswa", "Access hymns written in Xitswa, supporting local worship and language preservation."], ["Portuguese translations", "Includes Xitswa translations of well-known hymns originally in Portuguese."], ["Quick search", "Find hymns by title or number using an intuitive search experience."], ["Readable typography", "Adjust text size for comfortable reading during services or personal devotion."], ["Light & dark mode", "Use a theme that fits your environment, from bright daylight to low-light settings."], ["Simple navigation", "Move through hymns easily with a clean, focused layout."]],
    privacyHeading: "Xitswa Hymnal Privacy Policy", effective: "Effective date:", privacyIntro: "Xitswa Hymnal is a hymnal app focused on providing Christian hymns in Xitswa and translations of well-known Portuguese hymns. We value your privacy and designed the app to minimize data collection.", data: "Data we collect", noData: "No personal data is collected, stored, or shared by this app.", noAccount: "The app does not require account registration or login.", noAds: "The app does not use third-party analytics or advertising SDKs.", noTracking: "The app does not track users across apps or websites.", internet: "Internet access", internetText: "The app is intended to work without requiring internet access for core usage. If future versions introduce optional online features, this policy will be updated accordingly.", children: "Children's privacy", childrenText: "The app does not knowingly collect personal information from children or any users.", contact: "Contact", questions: "Questions? Contact", back: "Back to top", footerPrivacy: "Privacy Policy",
  },
  pt: {
    nav: ["Recursos", "Imagens", "Privacidade"], download: "Download",
    tag: "Hinos em Xitswa", intro: "Um hinário para casa e igreja", hero: <>Adore em <span className="text-[#0a5a63]">Xitswa</span>.<br />Leia e cante <em className="text-[#f4a72e] not-italic">em qualquer lugar.</em></>,
    description: <> <strong>Yimbelelani</strong> é um hinário digital criado para preservar e promover hinos cristãos em <strong>Xitswa</strong>, uma língua local do sul de Moçambique. Inclui traduções de hinos conhecidos do <strong>Português</strong>, apresentados num formato simples e legível.</>,
    badges: ["Pesquisa rápida", "Tamanho de texto ajustável", "Modo claro e escuro", "Leitura sem distrações"], cta: "Explorar a aplicação",
    featuresTitle: "O que pode fazer", featuresNote: "Criado para uma adoração concentrada", screenshotsTitle: "Imagens", screenshotsNote: "Uma experiência de leitura tranquila", privacyTitle: "Política de Privacidade",
    features: [["Hinos em Xitswa", "Aceda a hinos escritos em Xitswa, apoiando a adoração local e a preservação da língua."], ["Traduções do Português", "Inclui traduções para Xitswa de hinos conhecidos originalmente em Português."], ["Pesquisa rápida", "Encontre hinos por título ou número através de uma pesquisa intuitiva."], ["Tipografia legível", "Ajuste o tamanho do texto para uma leitura confortável durante os cultos ou a devoção pessoal."], ["Modo claro e escuro", "Use o tema adequado ao ambiente, desde a luz do dia até locais com pouca luz."], ["Navegação simples", "Percorra os hinos facilmente com um esquema limpo e focado."]],
    privacyHeading: "Política de Privacidade do Hinário Xitswa", effective: "Data de entrada em vigor:", privacyIntro: "O Hinário Xitswa é uma aplicação focada em disponibilizar hinos cristãos em Xitswa e traduções de hinos conhecidos em Português. Valorizamos a sua privacidade e concebemos a aplicação para minimizar a recolha de dados.", data: "Dados que recolhemos", noData: "Nenhum dado pessoal é recolhido, armazenado ou partilhado por esta aplicação.", noAccount: "A aplicação não requer registo de conta nem início de sessão.", noAds: "A aplicação não utiliza ferramentas de análise ou publicidade de terceiros.", noTracking: "A aplicação não rastreia utilizadores entre aplicações ou sites.", internet: "Acesso à Internet", internetText: "A aplicação foi concebida para funcionar sem exigir acesso à Internet para o uso principal. Se versões futuras incluírem funcionalidades online opcionais, esta política será atualizada.", children: "Privacidade das crianças", childrenText: "A aplicação não recolhe conscientemente informações pessoais de crianças ou de quaisquer utilizadores.", contact: "Contacto", questions: "Dúvidas? Contacte", back: "Voltar ao topo", footerPrivacy: "Política de Privacidade",
  },
} as const;

const featureIcons = [BookOpen, BookOpen, Search, SlidersHorizontal, SunMoon, Zap];
const screenshots = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = translations[locale];

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#f7fbfb]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-[18px] py-3">
          <a href="#top" className="flex min-w-[180px] items-center gap-2.5 no-underline">
            <Image src="/logo_dark.png" alt="Yitswa Hymnal logo" width={34} height={34} className=" " />
            <span><strong className="block font-bold leading-none text-[#0e6f7a]">Yimbelelani</strong><small className="mt-0.5 block text-xs text-[var(--muted)]">{t.tag}</small></span>
          </a>
          <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {t.nav.map((label, index) => <a key={label} href={["#features", "#screenshots", "#privacy"][index]} className="rounded-lg px-2.5 py-2 text-sm text-[var(--ink)]/80 hover:bg-[#0a5a63]/10">{label}</a>)}
            <Link href="/download" className="rounded-full bg-[#0e6f7a] px-3.5 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffb63f]">{t.download}</Link>
            <div className="ml-1 flex items-center rounded-full border border-[var(--line)] bg-white/80 p-1 text-xs font-bold shadow-sm" aria-label="Language selector">
              {(["en", "pt"] as const).map((language) => <button key={language} type="button" aria-pressed={locale === language} onClick={() => setLocale(language)} className={`rounded-full px-2.5 py-1.5 transition ${locale === language ? "bg-[#0a5a63] text-white" : "text-[var(--muted)] hover:text-[#0a5a63]"}`}>{language.toUpperCase()}</button>)}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="mx-auto grid max-w-[1100px] items-center gap-8 px-[18px] pb-8 pt-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#0e6f7a]">{t.intro}</p>
            <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,4.35rem)] leading-[1.02] tracking-[-.04em]">{t.hero}</h1>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--muted)]">{t.description}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {t.badges.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-3 py-2.5 text-[13px] text-[var(--muted)] shadow-[0_10px_24px_rgba(6,54,59,.06)]"><i className="h-2.5 w-2.5 rounded-full bg-[#f4a72e] ring-4 ring-[#f4a72e]/20" />{item}</span>)}
            </div>
            <Button className="mt-7" onClick={() => document.getElementById("screenshots")?.scrollIntoView()}>{t.cta} <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="relative rounded-[18px] border border-[var(--line)] bg-gradient-to-br from-[#0a5a63]/15 to-[#f4a72e]/10 p-4 shadow-[0_18px_60px_rgba(6,54,59,.14)] lg:rotate-2">
            <Image src="/2.png" alt="Xitswa Hymnal preview" width={600} height={900} className="relative z-10 h-auto w-full rounded-[14px]" priority />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-[1100px] px-[18px] py-10">
          <div className="mb-5 flex items-baseline justify-between"><h2 className="text-3xl tracking-tight">{t.featuresTitle}</h2><span className="text-sm text-[var(--muted)]">{t.featuresNote}</span></div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map(([title, description], index) => { const Icon = featureIcons[index]; return <article key={title} className="rounded-[18px] border border-[var(--line)] bg-white p-5 shadow-[0_12px_28px_rgba(6,54,59,.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(6,54,59,.1)]"><Icon className="mb-5 h-5 w-5 text-[#0e6f7a]" /><h3 className="mb-1.5 text-lg">{title}</h3><p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p></article>; })}
          </div>
        </section>

        <section id="screenshots" className="mx-auto max-w-[1100px] px-[18px] py-10"><div className="mb-5 flex items-baseline justify-between"><h2 className="text-3xl tracking-tight">{t.screenshotsTitle}</h2><span className="text-sm text-[var(--muted)]">{t.screenshotsNote}</span></div><div className="grid grid-cols-2 gap-3.5 md:grid-cols-3">{screenshots.map((src, index) => <figure key={src} className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-white shadow-[0_14px_32px_rgba(6,54,59,.08)]"><Image src={`/${src}`} alt={`${t.screenshotsTitle} ${index + 1}`} width={600} height={900} className="block h-auto w-full" /></figure>)}</div></section>

        <section id="privacy" className="mx-auto max-w-[1100px] px-[18px] py-10"><h2 className="mb-5 text-3xl tracking-tight">{t.privacyTitle}</h2><article className="rounded-[18px] border border-[var(--line)] bg-white p-5 shadow-[0_12px_28px_rgba(6,54,59,.06)]"><h3 className="mb-2 text-xl">{t.privacyHeading}</h3><p className="text-sm text-[var(--muted)]"><strong>{t.effective}</strong> 2026-01-29</p><p className="mt-4 leading-relaxed text-[var(--muted)]">{t.privacyIntro}</p><h4 className="mt-5 font-bold">{t.data}</h4><ul className="ml-5 list-disc leading-relaxed text-[var(--muted)]"><li><strong>{t.noData}</strong></li><li>{t.noAccount}</li><li>{t.noAds}</li><li>{t.noTracking}</li></ul><h4 className="mt-5 font-bold">{t.internet}</h4><p className="leading-relaxed text-[var(--muted)]">{t.internetText}</p><h4 className="mt-5 font-bold">{t.children}</h4><p className="leading-relaxed text-[var(--muted)]">{t.childrenText}</p><h4 className="mt-5 font-bold">{t.contact}</h4><p className="leading-relaxed text-[var(--muted)]">{t.questions} <a className="font-bold text-[#0a5a63] underline" href="mailto:info@yimbelelani.com">info@yimbelelani.com</a>.</p></article></section>
      </main>

      <footer className="mt-5 border-t border-[var(--line)] px-[18px] py-5"><div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 text-[13px] text-[var(--muted)]"><div className="flex items-center gap-2.5"><Image src="/logo_dark.png" alt="Xitswa Hymnal mark" width={52} height={26} className="h-[26px] w-auto" />© 2026 Xitswa Hymnal</div><div><a href="#top" className="text-[#0a5a63]">{t.back}</a><span className="px-2">·</span><a href="#privacy" className="text-[#0a5a63]">{t.footerPrivacy}</a></div></div></footer>
    </div>
  );
}
