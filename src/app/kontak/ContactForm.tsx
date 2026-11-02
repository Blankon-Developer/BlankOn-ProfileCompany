"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, Check, Sparkles, X, CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BODY, MONO, DISPLAY } from "@/lib/utils";
import { servicesPricingData } from "@/lib/services-pricing-data";

const defaultTopics = [
  "Konsultasi Proyek Baru",
  "Web Development & Portal Enterprise",
  "Pengembangan Aplikasi Mobile (iOS & Android)",
  "Kecerdasan Buatan (AI) & Machine Learning",
  "Cloud Computing & DevOps",
  "API Management & Integrasi Sistem",
  "Blockchain & Smart Contract",
  "Data Science & BI Dashboard",
  "Internet of Things & Smart Hardware",
  "Game Development & Interaktif",
  "Quality Assurance & Pengujian Sistem",
  "Konten Kreatif & Media Digital",
  "Maintenance Sistem Lama",
  "Partnership & Kolaborasi",
  "Lainnya"
];

const SLUG_TO_TOPIC: Record<string, string> = {
  "api-management-system-integration": "API Management & Integrasi Sistem",
  "blockchain": "Blockchain & Smart Contract",
  "cloud-computing": "Cloud Computing & DevOps",
  "creative-content-digital-media": "Konten Kreatif & Media Digital",
  "data-science": "Data Science & BI Dashboard",
  "game-development": "Game Development & Interaktif",
  "internet-of-things": "Internet of Things & Smart Hardware",
  "machine-learning-ai": "Kecerdasan Buatan (AI) & Machine Learning",
  "mobile-development": "Pengembangan Aplikasi Mobile (iOS & Android)",
  "quality-assurance-qa-testing": "Quality Assurance & Pengujian Sistem",
  "web-development": "Web Development & Portal Enterprise",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const paramLayanan = searchParams ? searchParams.get("layanan") || "" : "";
  const paramProyek = searchParams ? searchParams.get("proyek") || "" : "";

  const [activeLayananSlug, setActiveLayananSlug] = useState<string>("");
  const [activeProyekId, setActiveProyekId] = useState<string>("");

  useEffect(() => {
    if (paramLayanan) setActiveLayananSlug(paramLayanan);
    if (paramProyek) setActiveProyekId(paramProyek);
  }, [paramLayanan, paramProyek]);

  const matchedService = useMemo(() => {
    if (!activeLayananSlug) return null;
    return servicesPricingData[activeLayananSlug] || null;
  }, [activeLayananSlug]);

  const matchedProject = useMemo(() => {
    if (!matchedService || !activeProyekId) return null;
    return matchedService.projects.find((p) => p.id === activeProyekId) || null;
  }, [matchedService, activeProyekId]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(defaultTopics[0]);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasSelectedTopic, setHasSelectedTopic] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize topic and prefilled message when service/project is detected from URL
  useEffect(() => {
    if (activeLayananSlug && SLUG_TO_TOPIC[activeLayananSlug]) {
      setTopic(SLUG_TO_TOPIC[activeLayananSlug]);
      setHasSelectedTopic(true);
    } else if (matchedService) {
      setTopic(matchedService.title);
      setHasSelectedTopic(true);
    }

    if (matchedProject) {
      setMessage((prev) => {
        if (!prev || prev.includes("Halo Tim BlankOn Digital Tech")) {
          return `Halo Tim BlankOn Digital Tech,

Saya tertarik untuk meminta penawaran dan proposal resmi untuk layanan ${matchedService?.title || "Teknologi"}, khususnya implementasi:
• Proyek: ${matchedProject.name}
• Estimasi Biaya Katalog: ${matchedProject.priceRange}
• Target Timeline: ${matchedProject.timeline}

Mohon informasi langkah selanjutnya untuk penyesuaian ruang lingkup dan penyiapan proposal kerja sama.

Terima kasih.`;
        }
        return prev;
      });
    } else if (matchedService) {
      setMessage((prev) => {
        if (!prev || prev.includes("Halo Tim BlankOn Digital Tech")) {
          return `Halo Tim BlankOn Digital Tech,

Saya tertarik untuk meminta penawaran dan proposal resmi untuk layanan ${matchedService.title} (Patokan Investasi: ${matchedService.startingPrice}).

Mohon informasi langkah selanjutnya untuk penyesuaian kebutuhan sistem dan penyiapan proposal kerja sama.

Terima kasih.`;
        }
        return prev;
      });
    }
  }, [activeLayananSlug, matchedService, matchedProject]);

  const handleClearContext = () => {
    setActiveLayananSlug("");
    setActiveProyekId("");
    setTopic(defaultTopics[0]);
    setMessage("");
  };

  useEffect(() => {
    if (!isTopicOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsTopicOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTopicOpen]);

  useEffect(() => {
    if (!isTopicOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (dropdownRef.current?.contains(target)) return;

      setIsTopicOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isTopicOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError("Harap masukkan Nama Lengkap Anda terlebih dahulu.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError("Harap masukkan alamat Email Resmi yang valid (contoh: nama@perusahaan.com).");
      return;
    }

    if (!message.trim()) {
      setFormError("Harap isi pesan atau rincian kebutuhan Anda.");
      return;
    }

    const to = "blankondigitaltech@gmail.com";
    const subjectPrefix = matchedProject
      ? `[Penawaran Proyek: ${matchedProject.name}]`
      : matchedService
      ? `[Penawaran: ${matchedService.title}]`
      : `[Pertanyaan / Penawaran]`;
    const subject = `${subjectPrefix} - ${name.trim()}`;

    const projectLines = matchedProject
      ? [
          `• Rencana Implementasi: ${matchedProject.name}`,
          `• Estimasi Biaya Katalog: ${matchedProject.priceRange}`,
          `• Target Timeline: ${matchedProject.timeline}`,
        ]
      : matchedService
      ? [
          `• Layanan Spesifik: ${matchedService.title}`,
          `• Patokan Investasi Dasar: ${matchedService.startingPrice}`,
        ]
      : [];

    const lines = [
      "Halo Tim BlankOn Digital Tech,",
      "",
      "Berikut adalah rincian pesan dan pengajuan penawaran melalui website:",
      "",
      `• Nama Pengirim: ${name.trim()}`,
      `• Email Pengirim: ${email.trim()}`,
      phone.trim() ? `• No. Telepon / WhatsApp: ${phone.trim()}` : "",
      `• Topik / Bidang Layanan: ${topic}`,
      ...projectLines,
      "",
      "--- PESAN / KEBUTUHAN PROYEK ---",
      message.trim(),
      "",
      "Salam,",
      name.trim(),
    ].filter(Boolean);

    const body = lines.join("\r\n");
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const projectInfo = matchedProject
      ? `• Proyek Terpilih: ${matchedProject.name} (${matchedProject.priceRange}, waktu ${matchedProject.timeline})\n`
      : matchedService
      ? `• Layanan: ${matchedService.title} (${matchedService.startingPrice})\n`
      : "";

    const text = `Halo Tim BlankOn Digital Tech,

Saya ingin mengajukan penawaran dan konsultasi proyek:
• Nama: ${name.trim() || "-"}
• Email: ${email.trim() || "-"}
• Topik: ${topic}
${projectInfo}
Pesan / Catatan:
${message.trim() || "-"}

Mohon informasi dan tindak lanjutnya. Terima kasih.`;

    window.open(`https://wa.me/6285174155704?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Banner Integrasi Konteks Layanan & Proyek Dari URL */}
      {matchedService && (
        <div className="p-4 rounded-xl border border-[var(--accent-color)]/60 bg-[var(--accent-color)]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs animate-fade-in">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--accent-color)]" style={MONO}>
                PENAWARAN PROYEK TERINTEGRASI DARI KATALOG HARGA
              </span>
            </div>
            <h4 className="text-sm font-bold text-foreground" style={DISPLAY}>
              Layanan: {matchedService.title}
            </h4>
            {matchedProject ? (
              <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                Pilihan Proyek: <strong className="text-foreground">{matchedProject.name}</strong> • Rentang Biaya: <span className="font-mono text-foreground font-semibold">{matchedProject.priceRange}</span> ({matchedProject.timeline})
              </p>
            ) : (
              <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                Patokan Investasi: <span className="font-mono text-foreground font-semibold">{matchedService.startingPrice}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-background border border-border text-foreground" style={MONO}>
              Terdeteksi Otomatis
            </span>
            <button
              type="button"
              onClick={handleClearContext}
              className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-xs"
              title="Ganti / Reset Pilihan"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Input Nama & Email */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wide"
            style={MONO}
          >
            Nama Lengkap <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama Anda"
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground"
            style={BODY}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wide"
            style={MONO}
          >
            Email Resmi <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email Pribadi atau Instansi"
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground"
            style={BODY}
          />
        </div>
      </div>

      {/* Input No. WhatsApp / Telepon */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-xs font-semibold uppercase tracking-wide"
          style={MONO}
        >
          Nomor WhatsApp / Telepon <span className="text-xs text-muted-foreground font-normal">(Opsional)</span>
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contoh: 081234567890 (Untuk konfirmasi lebih cepat via WhatsApp)"
          className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground"
          style={BODY}
        />
      </div>

      {/* Custom Dropdown Topik / Layanan */}
      <div className="space-y-2">
        <label
          htmlFor="topic"
          className="text-xs font-semibold uppercase tracking-wide"
          style={MONO}
        >
          Topik / Bidang Layanan
        </label>

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            id="topic"
            aria-haspopup="listbox"
            aria-expanded={isTopicOpen}
            onClick={() => setIsTopicOpen((open) => !open)}
            className={`group flex w-full items-center justify-between
  border-b bg-transparent px-0 py-3 text-left text-base
  outline-none cursor-pointer
  transition-colors duration-200
  hover:border-foreground
  focus-visible:border-foreground
  ${hasSelectedTopic ? "border-foreground" : "border-border"}`}
            style={BODY}
          >
            <span className="font-medium text-foreground">{topic}</span>

            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:text-foreground ${
                isTopicOpen ? "rotate-180 text-foreground" : "rotate-0"
              }`}
            />
          </button>

          {isTopicOpen && (
            <>
              {/* Click outside */}
              <button
                type="button"
                aria-label="Tutup dropdown"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsTopicOpen(false)}
              />

              {/* Dropdown List */}
              <div
                id="topic-listbox"
                role="listbox"
                aria-label="Pilih topik"
                aria-hidden={!isTopicOpen}
                className={`absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto border border-border bg-white shadow-xl dark:bg-neutral-950 transition-[opacity,transform,visibility] duration-200 ease-out ${
                  isTopicOpen
                    ? "visible translate-y-0 scale-y-100 opacity-100"
                    : "invisible -translate-y-1 scale-y-[0.98] opacity-0"
                }`}
              >
                {defaultTopics.map((item) => {
                  const isSelected = topic === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={isTopicOpen ? 0 : -1}
                      onClick={() => {
                        setTopic(item);
                        setHasSelectedTopic(true);
                        setIsTopicOpen(false);
                      }}
                      className={`flex w-full items-center justify-between border-l-2 px-4 py-3 text-left text-xs md:text-sm transition-[background-color,color,border-color] duration-150 ease-out cursor-pointer ${
                        isSelected
                          ? "border-l-foreground bg-foreground text-background"
                          : "border-l-transparent text-foreground hover:border-l-foreground/40 hover:bg-muted"
                      }`}
                      style={BODY}
                    >
                      <span>{item}</span>

                      <Check
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 transition-opacity duration-150 ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Hidden input untuk form */}
          <input type="hidden" name="topic" value={topic} />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wide"
            style={MONO}
          >
            Rincian Pesan / Kebutuhan Proyek <span className="text-red-500">*</span>
          </label>

          <span
            className={`text-xs tabular-nums ${
              message.length >= 1500 ? "font-semibold text-red-500" : "text-muted-foreground"
            }`}
            style={MONO}
          >
            {message.length}/1500
          </span>
        </div>

        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={1500}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan sedikit tentang proyek atau tantangan Anda..."
          className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base leading-7 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground focus:border-b"
          style={BODY}
        />

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-muted-foreground" style={BODY}>
            Maksimal 1.500 karakter.
          </p>

          {message.length >= 1400 && (
            <p className="text-xs text-amber-600 dark:text-amber-400" style={BODY}>
              {1500 - message.length} karakter tersisa
            </p>
          )}
        </div>
      </div>

      {/* Error Message */}
      {formError && (
        <p className="text-xs text-red-500 font-medium" style={BODY}>
          {formError}
        </p>
      )}

      {/* Feedback State jika berhasil disubmit */}
      {isSubmitted && (
        <div className="rounded-xl border border-[var(--accent-color)]/50 bg-[var(--accent-color)]/10 p-5 space-y-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-foreground" style={DISPLAY}>
                Formulir Penawaran Berhasil Disiapkan!
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                Aplikasi email default Anda telah dibuka dengan draf resmi yang diarahkan ke <strong className="text-foreground">blankondigitaltech@gmail.com</strong>. Tim Solution Architect BlankOn akan memverifikasi dan mengirimkan balasan dalam 1x24 jam kerja.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppForward}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#25D366] text-white hover:opacity-90 transition-opacity"
              style={DISPLAY}
            >
              <FaWhatsapp className="h-3.5 w-3.5" />
              <span>Kirim Salinan via WhatsApp Langsung</span>
            </button>
          </div>
        </div>
      )}

      {/* Tombol Kirim & Informasi Kebijakan */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 p-0 md:p-4 md:border md:border-foreground md:border-dashed">
        <p
          className="hidden max-w-2xl text-xs md:text-sm leading-5 text-muted-foreground sm:block text-justify"
          style={BODY}
        >
          Dengan mengirim formulir penawaran ini, pesan Anda akan langsung diproses oleh tim <span className="text-[var(--accent-color)] font-semibold">BlankOn Digital Tech</span> tanpa perantara bot otomatis.
        </p>

        <button
          type="submit"
          disabled={isSubmitted}
          className={`md:ml-auto w-full md:w-auto inline-flex items-center justify-center text-foreground px-5 py-3 text-sm font-bold border border-foreground transition-all duration-200 cursor-pointer ${
            isSubmitted
              ? "opacity-50 cursor-not-allowed bg-muted"
              : "bg-transparent hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
          }`}
          style={DISPLAY}
        >
          {isSubmitted ? "Pesan Telah Dikirim" : "Kirim Penawaran"}
        </button>
      </div>
    </form>
  );
}
