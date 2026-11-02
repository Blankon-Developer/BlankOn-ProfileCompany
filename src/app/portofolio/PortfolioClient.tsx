"use client";

import { useState } from "react";
import { LayoutGrid, List, ArrowRight, ChevronLeft, ChevronRight, Search, ExternalLink, SearchX, SearchCode, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { BODY, DISPLAY, MONO, cn } from "@/lib/utils";

import { portfolioData, Portfolio } from "@/lib/portfolio-data";

export default function PortfolioClient({ serviceFilter }: { serviceFilter?: string }) {
  const [layout, setLayout] = useState<'grid' | 'row'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const formatServiceName = (service: string) => {
    return service
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const [selectedService, setSelectedService] = useState<string>(
    serviceFilter || ''
  );

  const formattedService = formatServiceName(selectedService);

  const ITEMS_PER_PAGE = 6;

  // Filter by service if provided, then extract unique categories
  const basePortfolios = serviceFilter
    ? portfolioData.filter(p => p.service.toLowerCase().replace(/[^a-z0-9]+/g, '-') === serviceFilter.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
    : portfolioData;

  const uniqueCategories = Array.from(new Set(basePortfolios.map(p => p.category))).sort();
  const categories = ["All", ...uniqueCategories];

  const filteredPortfolios = basePortfolios.filter(item => {
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPortfolios.length / ITEMS_PER_PAGE);
  const paginatedPortfolios = filteredPortfolios.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section className="py-12 md:py-12 px-6 md:px-20 max-w-8xl mx-auto">
      {/* Search & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 md:mb-4 gap-6 pb-4 border-b border-foreground/50">

        {/* Search Bar */}
        <div className="relative w-full lg:max-w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={15} className="text-foreground" strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="Cari proyek atau klien..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-transparent border border-foreground/50 text-foreground text-[12px] px-4 py-2.5 pl-10 outline-none focus:border-foreground/30 transition-colors rounded-[2px]"
            style={BODY}
          />
        </div>

        {/* Dropdown Kategori */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end">
          <div className="flex items-center gap-3">
            <span
              className="shrink-0 text-[10px] font-bold uppercase
      tracking-[0.16em] text-muted-foreground"
              style={MONO}
            >
              Kategori Portofolio
            </span>

            <div className="relative min-w-[180px]">
              {/* Tombol Dropdown */}
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                aria-expanded={isCategoryOpen}
                aria-haspopup="listbox"
                className="w-full flex items-center justify-between gap-4
        px-3 py-3
        bg-transparent border border-foreground/50
        hover:border-foreground/10
        focus-visible:border-[var(--accent-color)]
        outline-none transition-colors duration-300 cursor-pointer"
              >
                <span
                  className="text-[10px] font-semibold uppercase
          tracking-[0.12em] text-foreground"
                  style={MONO}
                >
                  {filterCategory === "All"
                    ? "Semua Kategori"
                    : filterCategory}
                </span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className={`text-muted-foreground transition-transform duration-300
          ${isCategoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Daftar Pilihan */}
              {isCategoryOpen && (
                <div
                  role="listbox"
                  aria-label="Pilih kategori layanan"
                  className="absolute top-full left-0 z-50
          w-full mt-1 py-1
          bg-card
          border border-foreground/10
          shadow-lg
          animate-in fade-in slide-in-from-top-1 duration-200"
                >
                  {categories.map((cat) => {
                    const isSelected = filterCategory === cat;

                    return (
                      <button
                        key={cat}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setFilterCategory(cat);
                          setCurrentPage(1);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full flex items-center justify-between
                gap-3 px-3 py-2.5 text-left
                transition-colors duration-200
                ${isSelected
                            ? "text-foreground bg-accent/[0.7]"
                            : "text-foreground hover:bg-foreground/20 cursor-pointer"
                          }`}
                      >
                        <span
                          className="text-[10px] font-semibold uppercase
                  tracking-[0.12em]"
                          style={MONO}
                        >
                          {cat === "All" ? "Semua Kategori" : cat}
                        </span>

                        {isSelected && (
                          <Check
                            size={13}
                            strokeWidth={1.8}
                            className="text-foreground shrink-0"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>


          {/* View Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-sm border border-foreground bg-foreground/[0.02] ">
            <button
              onClick={() => setLayout('grid')}
              aria-label="Grid view"
              className={cn("p-2 transition-all rounded-[2px] cursor-pointer", layout === 'grid' ? "bg-foreground shadow-sm text-background" : "text-muted-foreground hover:text-foreground")}
            >
              <LayoutGrid size={15} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setLayout('row')}
              aria-label="List view"
              className={cn("p-2 transition-all rounded-[2px] cursor-pointer", layout === 'row' ? "bg-foreground shadow-sm text-background" : "text-muted-foreground hover:text-foreground")}
            >
              <List size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div
        className={cn(
          "transition-all duration-500",
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            : "flex flex-col gap-4"
        )}
      >
        {paginatedPortfolios.map((item) => (
          <div
            key={item.slug}
            className={cn(
              "group relative border border-foreground/50",
              "bg-white/40 dark:bg-black/20",
              "transition-all duration-300",
              "hover:border-[var(--accent-color)]",
              layout === "grid"
                ? "flex flex-col h-full p-5 sm:p-7"
                : "flex flex-row items-center justify-between gap-3 sm:gap-6 p-4 sm:p-7"
            )}
          >
            {/* Informasi Proyek */}
            <div className={cn(
              "flex-1 min-w-0",
              layout === "row" && "max-w-4xl"
            )}>
              {/* Kategori dan Tahun */}
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.16em]
              text-[var(--accent-color)]
              bg-[var(--accent-color)]/10 px-2.5 py-1"
                  style={MONO}
                >
                  {item.category}
                </span>

                <span
                  className="text-[10px] font-medium uppercase tracking-[0.12em]
              text-muted-foreground border border-foreground/50
              px-2.5 py-1"
                  style={MONO}
                >
                  {item.year}
                </span>
              </div>

              {/* Judul Proyek */}
              <h3
                className={cn(
                  "font-bold tracking-tight leading-tight",
                  "text-foreground transition-colors duration-300",
                  "group-hover:text-[var(--accent-color)]",
                  layout === "grid"
                    ? "text-xl sm:text-2xl mb-3"
                    : "text-xl sm:text-2xl lg:text-3xl mb-3"
                )}
                style={DISPLAY}
              >
                {item.title}
              </h3>

              {/* Klien */}
              <p
                className="text-xs font-medium text-foreground/70 mb-4"
                style={MONO}
              >
                Klien: {item.client}
              </p>

              {/* Deskripsi */}
              <p
                className={cn(
                  "text-sm text-muted-foreground leading-relaxed",
                  "text-left",
                  layout === "grid"
                    ? "line-clamp-3"
                    : "line-clamp-2"
                )}
                style={BODY}
              >
                {item.excerpt}
              </p>
            </div>

            {/* Informasi Tambahan dan Tautan */}
            <div
              className={cn(
                "flex items-center justify-between shrink-0",
                layout === "grid"
                  ? "mt-7 pt-5 border-t border-foreground/50"
                  : "flex-col items-end justify-center gap-3 pl-3 border-l border-foreground/50 sm:gap-5 sm:pl-7 sm:ml-4"
              )}
            >
              {/* Industri */}
              <span
                className="text-[10px] text-muted-foreground
            uppercase tracking-[0.12em]"
                style={MONO}
              >
                {item.industry}
              </span>

              {/* Tautan Proyek */}
              <Link
                href={`/portofolio/${item.slug}`}
                className={cn(
                  "inline-flex items-center gap-2",
                  "text-[10px] font-bold uppercase tracking-[0.16em]",
                  "text-foreground transition-colors duration-300",
                  "hover:text-[var(--accent-color)]",
                  "focus-visible:outline-none focus-visible:text-[var(--accent-color)]"
                )}
                style={MONO}
              >
                Lihat Proyek

                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        ))}


        {/* Portofolio Kosong */}
        {basePortfolios.length === 0 && (
          <div
            className="col-span-full flex flex-col items-center justify-center
      py-16 sm:py-20 px-6 text-center
      border border-dashed border-foreground/50"
            style={BODY}
          >
            <div className="flex items-center justify-center
      w-12 h-12 mb-5
      border border-foreground
      bg-[var(--accent-color)]/75"
            >
              <SearchCode
                size={21}
                strokeWidth={1.5}
                className="text-foreground"
              />
            </div>

            <h3
              className="text-base font-semibold tracking-tight
        text-foreground mb-2"
              style={DISPLAY}
            >
              Belum Ada Portofolio untuk <br />Kategori Layanan {formattedService}
            </h3>

            <p className="max-w-sm text-sm leading-relaxed
      text-muted-foreground"
            >
              Mohon maaf, Portofolio untuk layanan ini sedang kami persiapkan.
              Silakan kunjungi kembali dalam waktu dekat.
            </p>
          </div>
        )}

        {/* Hasil Pencarian Kosong */}
        {basePortfolios.length > 0 &&
          filteredPortfolios.length === 0 && (
            <div
              className="col-span-full flex flex-col items-center justify-center
        py-16 sm:py-20 px-6 text-center
        border border-dashed border-foreground/50"
              style={BODY}
            >
              <div className="flex items-center justify-center
        w-12 h-12 mb-5
        border border-foreground
        bg-[var(--accent-color)]/75"
              >
                <SearchX
                  size={21}
                  strokeWidth={1.5}
                  className="text-foreground"
                />
              </div>

              <h3
                className="text-base font-semibold tracking-tight
          text-foreground mb-2"
                style={DISPLAY}
              >
                Proyek Tidak Ditemukan
              </h3>

              <p className="max-w-sm text-sm leading-relaxed
        text-muted-foreground"
              >
                Tidak ada proyek yang sesuai dengan pencarian Anda.
                Coba gunakan kata kunci atau kategori lainnya.
              </p>
            </div>
          )}

      </div>


      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-foreground/10">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border border-foreground/10 text-foreground disabled:opacity-30 transition-opacity hover:bg-foreground/5 rounded-[2px]"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-1" style={MONO}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={cn(
                  "w-8 h-8 flex items-center justify-center text-[10px] font-bold rounded-[2px] transition-colors",
                  currentPage === i + 1 ? "bg-foreground text-background" : "hover:bg-foreground/5 text-muted-foreground"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border border-foreground/10 text-foreground disabled:opacity-30 transition-opacity hover:bg-foreground/5 rounded-[2px]"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}
