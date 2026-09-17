"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-20 md:pt-10 pb-8 px-6 md:px-0 border-t border-background/10">
      <div className="max-w-8xl mx-auto px-6 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

          <div className="md:col-span-12 lg:col-span-4">
            {/* Footer has bg-foreground (inverted), so we swap the logos compared to Navbar */}
            <Image
              src="/BlankOn Logo.svg"
              alt="Logo"
              width={200}
              height={200}
              className="mb-6 h-[75px] w-auto dark:hidden"
            />

            <Image
              src="/BlankOn Logo Dark-Mode.svg"
              alt="Logo"
              width={200}
              height={200}
              className="mb-6 h-[75px] w-auto hidden dark:block"
            />

            <h2 className="text-2xl font-black mb-4 tracking-tight" style={DISPLAY}>
              BlankOn Digital Tech
            </h2>
            <p className="opacity-60 text-sm leading-relaxed max-w-sm text-justify text-pretty" style={BODY}>
              Partner technologi untuk personal, instansi, UMKM, dan perusahaan yang ingin membangun, memperbaiki, atau mengembangkan kebutuhan digital.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6" style={MONO}>
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
              <h3 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6" style={MONO}>
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
              <h3 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6" style={MONO}>
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
              <h3 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6" style={MONO}>
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="mailto:blankondev@hotmail.com" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    blankondev@hotmail.com <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    WhatsApp <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 text-sm transition-opacity group" style={BODY}>
                    Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-40 text-[11px] tracking-widest" style={MONO}>
            © 2026 BlankOn Digital Tech | <span className="uppercase">All rights reserved.</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ backgroundColor: LIME }} />
            <span className="opacity-40 text-[11px] uppercase tracking-widest" style={MONO}>
              Central Java, ID
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
