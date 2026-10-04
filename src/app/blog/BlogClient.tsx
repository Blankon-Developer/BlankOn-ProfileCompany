"use client";

import { useState } from "react";
import { LayoutGrid, List, Calendar as CalendarIcon, ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { BODY, DISPLAY, MONO, cn } from "@/lib/utils";

import { blogData as dummyBlogs, BlogPost as Blog } from "@/lib/blog-data";

const categories = [
  "All",
  "API Management & System Integration",
  "Blockchain",
  "Cloud Computing",
  "Creative Content & Digital Media",
  "Data Science",
  "Game Development",
  "Internet of Things",
  "Machine Learning / Artificial Intelligence",
  "Mobile Development",
  "Quality Assurance (QA) / Testing",
  "Web Development"
];

export default function BlogClient() {
  const [layout, setLayout] = useState<'grid' | 'row'>('grid');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'alpha-asc' | 'alpha-desc'>('date-desc');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const ITEMS_PER_PAGE = 6;

  const filteredBlogs = dummyBlogs.filter(blog => {
    const matchesCategory = filterCategory === 'All' || blog.category === filterCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === 'date-desc') return b.timestamp - a.timestamp;
    if (sortBy === 'date-asc') return a.timestamp - b.timestamp;
    if (sortBy === 'alpha-asc') return a.title.localeCompare(b.title);
    if (sortBy === 'alpha-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  const totalPages = Math.ceil(sortedBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = sortedBlogs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section className="py-12 md:py-12 px-6 md:px-28 max-w-8xl mx-auto">
      {/* Search & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6 pb-6 border-b border-foreground/10">
        
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={15} className="text-muted-foreground" strokeWidth={1.5} />
          </div>
          <input 
            type="text" 
            placeholder="Cari artikel berdasarkan judul..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-transparent border border-foreground/10 text-foreground text-[12px] px-4 py-2.5 pl-10 outline-none focus:border-foreground/30 transition-colors rounded-[2px]"
            style={BODY}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            {/* Category Filter */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold" style={MONO}>
              Category
            </span>
            <select 
              className="bg-transparent border border-foreground/10 text-foreground text-[11px] uppercase tracking-widest font-semibold px-4 py-2.5 outline-none focus:border-foreground/30 transition-colors rounded-none appearance-none pr-8 relative cursor-pointer"
              style={{
                  ...MONO,
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1em'
              }}
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold" style={MONO}>
              Sort By
            </span>
            <select 
              className="bg-transparent border border-foreground/10 text-foreground text-[11px] uppercase tracking-widest font-semibold px-4 py-2.5 outline-none focus:border-foreground/30 transition-colors rounded-none appearance-none pr-8 relative cursor-pointer"
              style={{
                  ...MONO,
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1em'
              }}
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as any);
                setCurrentPage(1);
              }}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="alpha-asc">Title (A-Z)</option>
              <option value="alpha-desc">Title (Z-A)</option>
            </select>
          </div>
          </div>
          
          <div className="flex items-center gap-1.5 p-1 rounded-sm border border-foreground/10 bg-foreground/[0.02]">
            <button 
            onClick={() => setLayout('grid')}
            aria-label="Grid view"
            className={cn("p-2 transition-all rounded-[2px]", layout === 'grid' ? "bg-foreground shadow-sm text-background" : "text-muted-foreground hover:text-foreground")}
          >
            <LayoutGrid size={15} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setLayout('row')}
            aria-label="List view"
            className={cn("p-2 transition-all rounded-[2px]", layout === 'row' ? "bg-foreground shadow-sm text-background" : "text-muted-foreground hover:text-foreground")}
          >
            <List size={15} strokeWidth={1.5} />
          </button>
        </div>
        </div>
      </div>

      {/* Blog List */}
      <div className={cn(
        "transition-all duration-500",
        layout === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          : "flex flex-col gap-6"
      )}>
        {paginatedBlogs.map((blog) => (
          <div 
            key={blog.slug} 
            className={cn(
              "group relative bg-white/40 dark:bg-black/20 border border-foreground/10 hover:border-foreground/30 transition-colors",
              layout === 'grid' ? "flex flex-col h-full p-8" : "flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8"
            )}
          >
            <div className={cn("flex-1", layout === 'row' && "max-w-4xl")}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-color)] mb-4 bg-[var(--accent-color)]/10 px-2 py-1 rounded-sm" style={MONO}>
                {blog.category}
              </span>
              <h3 className={cn("font-bold tracking-tight mb-3 text-foreground transition-colors group-hover:text-foreground/80 grdi", layout === 'grid' ? "text-xl text-center" : "text-xl sm:text-2xl")} style={DISPLAY}>
                {blog.title}
              </h3>
              <p className={cn("text-muted-foreground text-sm leading-relaxed text-justify", layout === 'grid' ? "line-clamp-3 mb-8" : "line-clamp-2")} style={BODY}>
                {blog.excerpt}
              </p>
            </div>
            
            <div className={cn(
              "flex items-center justify-between shrink-0",
              layout === 'grid' 
                ? "mt-auto pt-6 border-t border-foreground/10" 
                : "sm:flex-col sm:items-end sm:justify-center sm:gap-6 sm:pl-8 sm:border-l sm:border-foreground/10"
            )}>
              <div className="text-[10px] text-muted-foreground flex items-center gap-2 uppercase tracking-[0.1em]" style={MONO}>
                <CalendarIcon size={13} strokeWidth={1.5} /> 
                {blog.date}
              </div>
              <Link 
                href={`/blog/${blog.slug}`} 
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] text-foreground inline-flex items-center gap-2 transition-all",
                  layout === 'grid' 
                    ? "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" 
                    : "hover:text-[var(--accent-color)]"
                )} 
                style={MONO}
              >
                Baca Artikel <ArrowRight size={14} strokeWidth={1.5} className={cn(layout === 'grid' ? "" : "transition-transform group-hover:translate-x-1")} />
              </Link>
            </div>
          </div>
        ))}
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
