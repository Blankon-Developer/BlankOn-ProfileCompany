"use client";

import { useState, useEffect } from "react";
import { Link2, Facebook, Twitter, Linkedin, Check } from "lucide-react";
import { BODY, MONO, cn } from "@/lib/utils";

type Props = {
  headings: { id: string; text: string }[];
  url: string;
  title: string;
};

export default function BlogDetailClient({ headings, url, title }: Props) {
  const [activeId, setActiveId] = useState("");
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    // Make sure we use the real URL for sharing if mounted
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`,
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Table of Contents */}
      {headings.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6 pb-2 border-b border-foreground/10" style={MONO}>
            Daftar Isi
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground" style={BODY}>
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    "transition-colors hover:text-foreground line-clamp-2 leading-relaxed relative",
                    activeId === id && "text-foreground font-semibold"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {activeId === id && (
                    <span className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-foreground hidden lg:block" />
                  )}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share Actions */}
      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6 pb-2 border-b border-foreground/10" style={MONO}>
          Bagikan Artikel
        </h3>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleCopy}
            className="p-3 border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5 rounded-[2px]"
            title="Salin Tautan"
          >
            {copied ? <Check size={16} strokeWidth={1.5} className="text-green-600" /> : <Link2 size={16} strokeWidth={1.5} />}
          </button>
          
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-foreground/10 text-foreground transition-colors hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] rounded-[2px]"
            title="Bagikan ke Facebook"
          >
            <Facebook size={16} strokeWidth={1.5} />
          </a>
          
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-foreground/10 text-foreground transition-colors hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white rounded-[2px]"
            title="Bagikan ke X/Twitter"
          >
            <Twitter size={16} strokeWidth={1.5} />
          </a>
          
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-foreground/10 text-foreground transition-colors hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] rounded-[2px]"
            title="Bagikan ke LinkedIn"
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
