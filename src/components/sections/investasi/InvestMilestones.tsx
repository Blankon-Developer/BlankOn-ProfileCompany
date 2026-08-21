import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestMilestones() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto border-t border-border">
      <div className="mb-16 text-center">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Company Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight" style={DISPLAY}>
          Milestones
        </h2>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-0 md:border-none">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-border -z-10" />
        
        <div className="flex flex-col gap-12">
          {investmentData.milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row md:items-center ${isLeft ? 'md:flex-row-reverse' : ''} pl-8 md:pl-0`}>
                
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-2 top-0 md:top-auto w-4 h-4 bg-foreground rounded-full ring-4 ring-background" />

                {/* Content */}
                <div className={`md:w-1/2 ${isLeft ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="text-3xl font-black mb-2" style={DISPLAY}>{m.year}</div>
                  <div className="text-lg text-muted-foreground" style={BODY}>{m.event}</div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
