import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogData } from "@/lib/blog-data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return { title: "Not Found" };
  return {
    title: `${blog.title} | Blog BlankOn Digital Tech`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Generate TOC and process HTML
  const headings: { id: string; text: string }[] = [];
  let headingIndex = 0;
  
  // Regex to find <h2> tags and capture the content
  const processedContent = blog.content.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = `heading-${headingIndex++}`;
    headings.push({ id, text });
    return `<h2 id="${id}" class="text-2xl md:text-3xl font-bold mb-6 scroll-mt-18 text-foreground" style="font-family: var(--font-display)">${text}</h2>`;
  });

  // Adding standard styling to paragraphs and lists in the content
  const styledContent = processedContent
    .replace(/<p>/g, `<p class="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg" style="font-family: var(--font-body)">`)
    .replace(/<ul>/g, `<ul class="list-disc pl-6 text-muted-foreground mb-8 space-y-3 text-base md:text-lg" style="font-family: var(--font-body)">`)
    .replace(/<li>/g, `<li>`)
    .replace(/<strong>/g, `<strong class="text-foreground font-semibold">`)
    .replace(/<em>/g, `<em class="italic text-foreground">`);

  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      
      <main className="pt-32 pb-24">
        
        {/* Back Link */}
        <div className="max-w-8xl mx-auto px-6 lg:px-28 mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors" style={MONO}>
            <ArrowLeft size={14} strokeWidth={1.5} /> Kembali ke Blog
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-8xl mx-auto px-6 lg:px-28 mb-12">
          <div className="inline-block bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm mb-6" style={MONO}>
            {blog.category}
          </div>
          <h1 className="text-3xl text-center md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]" style={DISPLAY}>
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-end gap-6 md:gap-10 text-sm text-muted-foreground border-y border-foreground/10 py-6" style={MONO}>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-foreground/10">
                <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-xs uppercase tracking-widest mb-1">{blog.author.name}</span>
                <span className="text-[10px] uppercase tracking-widest">{blog.author.role}</span>
              </div>
            </div>
            
            <div className="w-px h-8 bg-foreground/10 hidden md:block"></div>
            
            <div className="flex flex-col gap-1">
              <span className="text-foreground font-bold text-[10px] uppercase tracking-widest">Dipublikasikan</span>
              <span className="text-[10px] uppercase tracking-wider">{blog.date}</span>
            </div>

            <div className="w-px h-8 bg-foreground/10 hidden md:block"></div>
            
            <div className="flex flex-col gap-1">
              <span className="text-foreground font-bold text-[10px] uppercase tracking-widest">Estimasi</span>
              <span className="text-[10px] uppercase tracking-wider">{blog.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-8xl mx-auto px-6 lg:px-28 mb-16 md:mb-12">
          <div className="relative aspect-[21/9] w-full rounded-[2px] overflow-hidden border border-foreground/10 bg-muted">
            <Image src={blog.image} alt={blog.title} fill className="object-cover hover:scale-105 transition-transform duration-1000" priority />
          </div>
        </div>

        {/* Content & Sidebar */}
        <div className="max-w-8xl mx-auto px-6 lg:px-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
            
            {/* Sidebar (TOC & Share) */}
            <aside className="w-full lg:w-64 shrink-0 order-2 lg:order-1 sticky top-32">
              <BlogDetailClient headings={headings} url={`https://blankon.com/blog/${blog.slug}`} title={blog.title} />
            </aside>

            {/* Main Content */}
            <article className="flex-1 order-1 lg:order-2 w-full max-w-8xl">
              <div 
                className="prose prose-lg dark:prose-invert text-justify max-w-none prose-headings:font-display prose-a:text-[var(--accent-color)] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: styledContent }}
              />
              
              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-foreground/10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-foreground" style={MONO}>Topik Terkait</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-foreground/[0.03] border border-foreground/10 text-muted-foreground hover:text-foreground transition-colors text-[10px] font-bold uppercase tracking-[0.15em] rounded-[2px]" style={MONO}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
