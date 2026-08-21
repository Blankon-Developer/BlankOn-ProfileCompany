"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { DISPLAY, BODY, MONO, cn } from "@/lib/utils";

export default function InvestorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    // TODO: Ganti dengan access_key Web3Forms milik Anda
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "Pengajuan Minat Investasi Baru");
    formData.append("from_name", "Investor Portal");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setError(data.message || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (err) {
      setError("Gagal menghubungi server. Periksa koneksi internet Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 bg-muted/30 border border-border rounded-3xl h-full min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-foreground mb-6" />
        <h3 className="text-3xl font-black mb-4" style={DISPLAY}>Terima Kasih!</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md" style={BODY}>
          Pengajuan minat investasi Anda telah kami terima. Tim Investor Relations kami akan segera menghubungi Anda melalui email untuk langkah selanjutnya dan akses NDA.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Nama Lengkap *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              placeholder="John Doe"
              style={BODY}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Email Bisnis *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              placeholder="john@company.com"
              style={BODY}
            />
          </div>
        </div>

        {/* Company & LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Perusahaan / Institusi *</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              placeholder="Nama Institusi / Pribadi"
              style={BODY}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="linkedin" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Profil LinkedIn (Opsional)</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              placeholder="https://linkedin.com/in/johndoe"
              style={BODY}
            />
          </div>
        </div>

        {/* Profile & Ticket Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="investor_type" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Profil Investor *</label>
            <select
              id="investor_type"
              name="investor_type"
              required
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              style={BODY}
            >
              <option value="">Pilih Profil</option>
              <option value="Angel Investor">Angel Investor</option>
              <option value="Venture Capital">Venture Capital (VC)</option>
              <option value="Private Equity">Private Equity</option>
              <option value="Corporate / Strategic Partner">Corporate / Strategic Partner</option>
              <option value="Individual">Individu Lainnya</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ticket_size" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Estimasi Ticket Size *</label>
            <select
              id="ticket_size"
              name="ticket_size"
              required
              className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
              style={BODY}
            >
              <option value="">Pilih Kisaran</option>
              <option value="< Rp 1 Miliar">&lt; Rp 1 Miliar</option>
              <option value="Rp 1 Miliar - Rp 5 Miliar">Rp 1 Miliar - Rp 5 Miliar</option>
              <option value="Rp 5 Miliar - Rp 10 Miliar">Rp 5 Miliar - Rp 10 Miliar</option>
              <option value="> Rp 10 Miliar">&gt; Rp 10 Miliar</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Pesan Tambahan (Opsional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="px-4 py-3 bg-white dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors resize-none"
            placeholder="Jelaskan secara singkat ketertarikan Anda atau pertanyaan awal yang Anda miliki..."
            style={BODY}
          />
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm" style={BODY}>
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-black rounded-lg transition-all",
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
          )}
          style={DISPLAY}
        >
          {isSubmitting ? (
            <>Memproses <Loader2 size={20} className="animate-spin" /></>
          ) : (
            <>Kirim Pengajuan <ArrowRight size={20} /></>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4" style={BODY}>
          Data Anda dijamin kerahasiaannya dan hanya akan digunakan untuk keperluan komunikasi terkait investasi.
        </p>
      </form>
    </div>
  );
}
