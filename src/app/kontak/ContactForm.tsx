"use client";

import { useState } from "react";
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
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
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
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
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
          Topik
        </label>

        <div className="relative">
          <button
            type="button"
            id="topic"
            aria-haspopup="listbox"
            aria-expanded={isTopicOpen}
            onClick={() => setIsTopicOpen(!isTopicOpen)}
            className="group flex w-full items-center justify-between border-b border-border bg-transparent px-0 py-3 text-left text-base outline-none transition-colors hover:border-foreground focus:border-foreground"
            style={BODY}
          >
            <span>{topic}</span>

            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isTopicOpen ? "rotate-180 text-foreground" : ""
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
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border border-border bg-white shadow-xl dark:bg-neutral-950">
                {topics.map((item) => {
                  const isSelected = topic === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setTopic(item);
                        setIsTopicOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm transition-colors ${isSelected
                          ? "bg-foreground text-background"
                          : "text-foreground hover:bg-muted"
                        }`}
                      style={BODY}
                    >
                      <span>{item}</span>

                      {isSelected && (
                        <Check className="h-4 w-4" />
                      )}
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
            className={`text-xs tabular-nums ${
              message.length >= 1500
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
          className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base leading-7 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
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

      <div className="flex items-center justify-between gap-6 pt-4">
        <p
          className="hidden max-w-md text-xs leading-5 text-muted-foreground sm:block"
          style={BODY}
        >
          Dengan mengirim pesan, Anda memulai percakapan dengan
          tim BlankOn Digital Tech.
        </p>

        <button
          type="submit"
          className="ml-auto inline-flex items-center justify-center bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
          style={DISPLAY}
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}
