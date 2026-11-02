"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { BODY, MONO, DISPLAY } from "@/lib/utils";

const topics = [
  "Konsultasi Proyek Baru",
  "Maintenance Sistem Lama",
  "Partnership",
  "Lainnya"
];

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasSelectedTopic, setHasSelectedTopic] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <form className="space-y-7">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wide"
            style={MONO}
          >
            Nama Lengkap
          </label>

          <input
            id="name"
            name="name"
            type="text"
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
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Masukkan Email Pribadi atau Instansi"
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground"
            style={BODY}
          />
        </div>
      </div>

      {/* Custom Dropdown */}
      <div className="space-y-2">
        <label
          htmlFor="topic"
          className="text-xs font-semibold uppercase tracking-wide"
          style={MONO}
        >
          Topik Pembahasan
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
  ${hasSelectedTopic
    ? "border-foreground"
    : "border-border"
  }`}
            style={BODY}
          >
            <span>{topic}</span>

            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:text-foreground ${isTopicOpen ? "rotate-180 text-foreground" : "rotate-0"
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

              {/* Dropdown */}
              <div
                id="topic-listbox"
                role="listbox"
                aria-label="Pilih topik"
                aria-hidden={!isTopicOpen}
                className={`absolute left-0 right-0 top-full z-50 mt-2 origin-top overflow-hidden border border-border bg-white shadow-xl dark:bg-neutral-950 transition-[opacity,transform,visibility] duration-200 ease-out ${isTopicOpen
                  ? "visible translate-y-0 scale-y-100 opacity-100"
                  : "invisible -translate-y-1 scale-y-[0.98] opacity-0"
                  }`}
              >
                {topics.map((item) => {
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
                      className={`flex w-full items-center justify-between border-l-2 px-4 py-3.5 text-left text-sm transition-[background-color,color,border-color] duration-150 ease-out cursor-pointer ${isSelected
                        ? "border-l-foreground bg-foreground text-background"
                        : "border-l-transparent text-foreground hover:border-l-foreground/40 hover:bg-muted"
                        }`}
                      style={BODY}
                    >
                      <span>{item}</span>

                      <Check
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 transition-opacity duration-150 ${isSelected
                          ? "opacity-100"
                          : "opacity-0"
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

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wide"
            style={MONO}
          >
            Pesan
          </label>

          <span
            className={`text-xs tabular-nums ${message.length >= 1500
              ? "font-semibold text-red-500"
              : "text-muted-foreground"
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan sedikit tentang proyek atau tantangan Anda..."
          className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base leading-7 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground not-placeholder-shown:border-foreground focus:border-b"
          style={BODY}
        />

        <div className="flex items-center justify-between pt-1">
          <p
            className="text-xs text-muted-foreground"
            style={BODY}
          >
            Maksimal 1.500 karakter.
          </p>

          {message.length >= 1400 && (
            <p
              className="text-xs text-amber-600 dark:text-amber-400"
              style={BODY}
            >
              {1500 - message.length} karakter tersisa
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 pt-4 p-0 md:p-4 md:border md:border-foreground md:border-dashed">
        <p
          className="hidden max-w-2xl text-sm leading-5 text-muted-foreground sm:block text-justify"
          style={BODY}
        >
          Dengan mengirim formulir pesan ini, Anda memulai percakapan dengan tim <span className="text-[var(--accent-color)] font-semibold">BlankOn Digital Tech</span>. <br />Kami akan menindaklanjuti setiap konsultasi, pertanyaan, atau pesan yang masuk dengan estimasi waktu respons dalam waktu dihari kerja.
        </p>

        <button
          type="submit"
          className="md:ml-auto w-full md:w-auto inline-flex items-center justify-center text-foreground px-3 py-2 md:px-7 md:py-3.5 text-sm font-semibold bg-transparent border border-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
          style={DISPLAY}
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}
