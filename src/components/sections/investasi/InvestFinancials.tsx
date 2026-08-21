import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestFinancials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto bg-foreground text-background rounded-3xl my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-background/60" style={MONO}>
            Financial Snapshot
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={DISPLAY}>
            Solid & Profitable Growth
          </h2>
          <p className="text-background/80 leading-relaxed text-lg mb-8" style={BODY}>
            Kami mempertahankan marjin kotor yang sehat sambil terus menginvestasikan kembali arus kas ke dalam inovasi produk dan akuisisi B2B.
          </p>

          <div className="flex gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-2 text-background/60" style={MONO}>Gross Margin</p>
              <h3 className="text-4xl font-black" style={DISPLAY}>{investmentData.financials.grossMargin}</h3>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-2 text-background/60" style={MONO}>EBITDA</p>
              <h3 className="text-4xl font-black" style={DISPLAY}>{investmentData.financials.ebitda}</h3>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex items-end">
          <div className="w-full flex items-end justify-between gap-4 h-64 border-b border-background/20 pb-4 relative">
            {/* Simple CSS Bar Chart for Revenue Growth */}
            {investmentData.financials.historical.map((data, idx) => {
              // Calculate a dummy height percentage based on index for visual effect
              const heights = ["40%", "70%", "100%"];
              return (
                <div key={idx} className="flex flex-col items-center gap-4 w-full group">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold" style={MONO}>
                    {data.revenue}
                  </div>
                  <div 
                    className="w-full bg-background/20 group-hover:bg-background transition-colors rounded-t-sm"
                    style={{ height: heights[idx] }}
                  />
                  <div className="text-sm font-semibold" style={MONO}>{data.year}</div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
