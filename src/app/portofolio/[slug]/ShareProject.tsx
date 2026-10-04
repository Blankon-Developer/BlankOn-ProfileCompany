"use client";

import { useState, useEffect } from "react";
import { Link2, Check, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { MONO } from "@/lib/utils";

export default function ShareProject({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  };

  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6 md:pt-12 pt-6 pb-2 border-b border-foreground/10" style={MONO}>
        Bagikan Proyek
      </h3>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleCopy}
          className="p-3 border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5 rounded-[2px] cursor-pointer"
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
      
      <div className="md:pt-12 pt-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6 pb-2 border-b border-foreground/10" style={MONO}>
          © 2026 BlankOn Digital Tech | All rights reserved.
        </h3>
      </div>
    </div>
  );
}
