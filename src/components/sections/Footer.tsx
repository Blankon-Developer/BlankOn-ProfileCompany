"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-5 md:pt-10 pb-8 px-6 md:px-0 border-t border-background/10">
      <div className="max-w-8xl mx-auto px-6 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-5 md:mb-10">


          <div className="md:col-span-12 lg:col-span-4 text-center md:text-left">
            {/* Logo */}
            <Image
              src="/BlankOn Logo.svg"
              alt="BlankOn Digital Tech"
              width={200}
              height={200}
              className="mx-auto mb-6 h-[75px] w-auto dark:hidden md:mx-0"
            />

            <Image
              src="/BlankOn Logo Dark-Mode.svg"
              alt="BlankOn Digital Tech"
              width={200}
              height={200}
              className="mx-auto mb-6 hidden h-[75px] w-auto dark:block md:mx-0"
            />

            <h2
              className="mb-4 text-3xl font-black tracking-tight text-transparent [-webkit-text-stroke:0.5px_black] dark:[-webkit-text-stroke:0.5px_white] md:text-5xl"
              style={DISPLAY}
            >
              BlankOn Digital Tech
            </h2>

            <p
              className="mx-auto max-w-sm text-justify text-sm leading-relaxed opacity-60 text-pretty md:mx-0 md:max-w-md md:text-base"
              style={BODY}
            >
              Partner technologi untuk personal, instansi, UMKM, dan perusahaan yang ingin membangun, memperbaiki, atau mengembangkan kebutuhan digital.
            </p>
          </div>


          <div className="md:col-span-7 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest mb-6" style={MONO}>
                Layanan & Solusi
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/layanan" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Layanan Kami</Link>
                </li>
                <li>
                  <Link href="/solusi" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Solusi Kami</Link>
                </li>
                <li>
                  <Link href="/proses" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Proses Kerja</Link>
                </li>
                <li>
                  <Link href="/harga" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Harga</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest mb-6" style={MONO}>
                Perusahaan
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/tentang" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Tentang Kami</Link>
                </li>
                <li>
                  <Link href="/portofolio" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Karya</Link>
                </li>
                <li>
                  <Link href="/investasi" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Investasi</Link>
                </li>
                <li>
                  <Link href="/karier" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Karier</Link>
                </li>
                <li>
                  <Link href="/blog" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest mb-6" style={MONO}>
                Bantuan
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/faq" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>FAQ</Link>
                </li>
                <li>
                  <Link href="/kontak" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Kontak</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-3 flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest mb-6" style={MONO}>
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="mailto:blankondev@hotmail.com" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    blankondev@hotmail.com <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285174155704" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    WhatsApp <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/blankon-digital-tech" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/blankondigitaltech" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-t-accent pt-5 md:pt-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
            {/* Copyright */}
            <p
              className="text-center text-[10px] leading-relaxed tracking-[0.15em] opacity-50 md:text-left md:text-[11px]"
              style={MONO}
            >
              © 2026 BlankOn Digital Tech
              <span className="mx-2 hidden md:inline opacity-100">|</span>
              <span className="block uppercase md:inline">
                All rights reserved
              </span>
            </p>

            {/* Location */}
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full md:animate-none md:h-3.5 md:w-1 md:rounded-none"
                style={{ backgroundColor: "var(--accent-color)" }}
              />

              <span
                className="text-[10px] uppercase tracking-[0.15em] opacity-50 md:text-[11px]"
                style={MONO}
              >
                Central Java, ID
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
