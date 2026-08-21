"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-20 md:pt-10 pb-8 px-6 md:px-0 border-t border-background/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

          <div className="md:col-span-5">
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
              BlankOn Tech
            </h2>
            <p className="opacity-60 text-sm leading-relaxed max-w-sm text-justify text-pretty" style={BODY}>
              Partner technologi untuk personal, instansi, UMKM, dan perusahaan yang ingin membangun, memperbaiki, atau mengembangkan kebutuhan digital.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6" style={MONO}>
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Home</Link>
              </li>
              <li>
                <Link href="#layanan" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Services</Link>
              </li>
              <li>
                <Link href="#penawaran" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Our Work</Link>
              </li>
              <li>
                <Link href="/tentang" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>About</Link>
              </li>
              <li>
                <a href="mailto:blankondev@hotmail.com" className="opacity-70 hover:opacity-100 text-sm transition-opacity" style={BODY}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8">
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
            © 2026 BlankOn Tech | <span className="uppercase">All rights reserved.</span>
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
