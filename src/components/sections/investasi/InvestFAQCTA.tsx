"use client";

import { useState } from "react";
import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Siapa yang dapat berinvestasi?",
    a: "Kesempatan terbuka untuk angel investor, venture capital, maupun strategic partner (perusahaan/institusi) yang memiliki visi sejalan dengan kami."
  },
  {
    q: "Berapa minimum investasi?",
    a: "Minimum ticket size dapat didiskusikan lebih lanjut bergantung pada ronde pendanaan dan instrumen investasi yang dipilih."
  },
  {
    q: "Apa bentuk instrumen investasi yang ditawarkan?",
    a: "Kami menawarkan instrumen ekuitas (Penerbitan Saham Baru) atau Convertible Note/SAFE bergantung pada kesepakatan valuasi saat ini."
  },
  {
    q: "Bagaimana proses due diligence dilakukan?",
    a: "Setelah NDA ditandatangani, kami akan membuka akses ke Data Room yang berisi legalitas, laporan keuangan historis, dan proyeksi bisnis."
  },
  {
    q: "Siapa yang dapat dihubungi untuk langkah selanjutnya?",
    a: "Anda dapat menghubungi tim Investor Relations kami secara langsung melalui email di invest@baracode.id atau melalui formulir di bawah ini."
  }
];

export default function InvestFAQCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
            Investor FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={DISPLAY}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-border rounded-xl p-6 cursor-pointer bg-white dark:bg-black/20 hover:border-foreground/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-lg" style={DISPLAY}>{faq.q}</h3>
                {openIndex === i ? <Minus className="flex-shrink-0" /> : <Plus className="flex-shrink-0" />}
              </div>
              {openIndex === i && (
                <p className="mt-4 text-muted-foreground leading-relaxed" style={BODY}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto bg-foreground text-background rounded-3xl my-12 text-center">
        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-4xl mx-auto" style={DISPLAY}>
          Let's Build the Future Together
        </h2>
        <p className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto mb-12 leading-relaxed" style={BODY}>
          Kami membuka kesempatan bagi investor dan strategic partner yang memiliki visi yang sama untuk membangun infrastruktur teknologi masa depan.
        </p>
        <Link 
          href="/investasi/pengajuan"
          className="inline-flex items-center gap-2 px-10 py-5 bg-background text-foreground font-black rounded-sm transition-opacity hover:opacity-90 text-lg"
          style={DISPLAY}
        >
          Explore Investment Opportunity <ArrowRight size={20} />
        </Link>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-6 md:px-10 max-w-5xl mx-auto text-center border-t border-border">
        <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
          <strong>Disclaimer:</strong> Informasi yang terdapat pada halaman ini ditujukan secara eksklusif bagi calon investor yang memenuhi kualifikasi dan bukan merupakan penawaran umum (public offering) efek menurut hukum yang berlaku di Republik Indonesia, termasuk namun tidak terbatas pada Undang-Undang Pasar Modal. Segala bentuk angka proyeksi, return, atau pertumbuhan pasar bersifat estimasi dan mengandung risiko bisnis. Keputusan investasi sepenuhnya berada di tangan investor setelah melalui proses due diligence independen.
        </p>
      </section>
    </>
  );
}
