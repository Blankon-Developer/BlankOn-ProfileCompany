import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestMarket() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto bg-muted/30 border border-border rounded-3xl my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
            Market Opportunity
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={DISPLAY}>
            Massive & Expanding Digital Economy
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg" style={BODY}>
            Transformasi digital bukan lagi opsi, melainkan keharusan bagi sektor pemerintahan, BUMN, dan korporasi. Dengan regulasi yang semakin mendukung lokalisasi data dan digitalisasi pelayanan publik, pasar IT dan cloud di Indonesia mengalami pertumbuhan eksponensial.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="p-8 bg-background border border-border rounded-xl">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Total Addressable Market (TAM)</p>
            <h3 className="text-4xl font-black text-foreground" style={DISPLAY}>{investmentData.market.tam}</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Serviceable Market</p>
              <h3 className="text-2xl font-black text-foreground" style={DISPLAY}>{investmentData.market.sam}</h3>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Industry Growth</p>
              <h3 className="text-2xl font-black text-foreground" style={DISPLAY}>{investmentData.market.industryGrowth}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
