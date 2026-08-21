import { DISPLAY, BODY, MONO } from "@/lib/utils";

export default function InvestCompany() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto text-center border-b border-border">
      <div className="mb-12">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Our Identity
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8" style={DISPLAY}>
          Membangun Ekosistem Digital Berkelanjutan
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto" style={BODY}>
          Baracode Tech Solution lahir dari visi sederhana: teknologi enterprise tidak seharusnya kaku, mahal, dan lambat. Kami merevolusi cara perusahaan menengah hingga enterprise beradaptasi dengan dunia digital melalui produk dan layanan yang lincah, aman, dan berorientasi pada hasil bisnis nyata.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
        <div className="p-8 bg-muted/50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4" style={DISPLAY}>Visi</h3>
          <p className="text-muted-foreground leading-relaxed" style={BODY}>
            Menjadi katalisator utama transformasi digital di Asia Tenggara dengan infrastruktur teknologi yang adaptif dan inklusif.
          </p>
        </div>
        <div className="p-8 bg-muted/50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4" style={DISPLAY}>Misi</h3>
          <ul className="text-muted-foreground leading-relaxed list-disc list-inside flex flex-col gap-2" style={BODY}>
            <li>Memberikan solusi B2B yang efisien.</li>
            <li>Memangkas kompleksitas pengembangan software.</li>
            <li>Menciptakan nilai tambah melalui inovasi.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
