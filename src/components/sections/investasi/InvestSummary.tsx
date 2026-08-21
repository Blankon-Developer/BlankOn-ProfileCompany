import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestSummary() {
  const summaries = [
    { label: "Target Funding", value: investmentData.summary.targetFunding },
    { label: "Revenue Growth", value: investmentData.summary.revenueGrowth },
    { label: "Active Customers", value: investmentData.summary.customers },
    { label: "Established", value: investmentData.summary.established },
  ];

  return (
    <section className="py-12 md:py-16 px-6 md:px-10 max-w-6xl mx-auto border-t border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
        {summaries.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <h3 className="text-3xl md:text-4xl font-black mb-2" style={DISPLAY}>
              {item.value}
            </h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
