"use client";

import { useState } from "react";
import { cn, DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import { Search, ListChecks, LayoutTemplate, Code2, RefreshCcw, BadgeCheck, Rocket, Activity } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Understand",
      desc: "Kami memahami kebutuhan bisnis, masalah pengguna, kondisi sistem yang sudah ada, serta tujuan yang ingin dicapai sebelum menentukan pendekatan produk dan teknis.",
      output: "Business context · Problem definition · Initial scope",
      icon: <Search size={24} />,
    },
    {
      id: "02",
      title: "Plan",
      desc: "Kami menyusun kebutuhan, prioritas, tahapan pekerjaan, dan pendekatan teknis agar proses pengembangan memiliki arah yang jelas dan dapat dikerjakan secara bertahap.",
      output: "Product requirements · Priorities · Development plan",
      icon: <ListChecks size={24} />,
    },
    {
      id: "03",
      title: "Design",
      desc: "Kami merancang pengalaman produk dan struktur teknis yang dibutuhkan, termasuk bagaimana aplikasi, data, dan infrastruktur akan bekerja sebagai satu kesatuan.",
      output: "UI/UX design · Architecture · Technical specification",
      icon: <LayoutTemplate size={24} />,
    },
    {
      id: "04",
      title: "Develop",
      desc: "Tim mulai membangun produk berdasarkan rancangan yang telah disepakati dengan menerapkan proses development yang terstruktur dan mudah dikembangkan ke tahap berikutnya.",
      output: "Application code · Integration · Version control",
      icon: <Code2 size={24} />,
    },
    {
      id: "05",
      title: "Test",
      desc: "Setiap perubahan diuji untuk memastikan fungsi berjalan sesuai kebutuhan, integrasi tetap aman, dan masalah dapat ditemukan sebelum produk digunakan secara lebih luas.",
      output: "Automated testing · Quality checks · Bug fixing",
      icon: <BadgeCheck size={24} />,
    },
    {
      id: "06",
      title: "Deploy",
      desc: "Produk dipersiapkan dan dirilis ke environment yang sesuai melalui proses deployment yang terstruktur, sehingga perubahan dapat dilakukan secara konsisten dan terkontrol.",
      output: "CI/CD pipeline · Release · Infrastructure",
      icon: <Rocket size={24} />,
    },
    {
      id: "07",
      title: "Operate",
      desc: "Setelah produk berjalan, kami menjaga sistem tetap dapat digunakan dengan memantau performa, ketersediaan layanan, serta kondisi infrastruktur yang mendukungnya.",
      output: "Monitoring · Logging · Maintenance",
      icon: <Activity size={24} />,
    },
    {
      id: "08",
      title: "Improve",
      desc: "Data dari sistem, hasil monitoring, dan feedback pengguna digunakan sebagai dasar untuk melakukan perbaikan dan menentukan pengembangan produk berikutnya.",
      output: "Optimization · Feedback · Continuous improvement",
      icon: <RefreshCcw size={24} />,
    },
  ];

  // 8 Positions perfectly aligned on the 800x400 infinity loop path
  const positions = [
    { left: "23%", top: "22%" },   // 1. Understand (Top-Left)
    { left: "6.5%", top: "50%" },  // 2. Plan (Left Edge)
    { left: "23%", top: "78%" },   // 3. Design (Bottom-Left)
    { left: "42%", top: "62%" },   // 4. Develop (Center approach from bottom-left)
    { left: "58%", top: "38%" },   // 5. Test (Center leaving to top-right)
    { left: "77%", top: "22%" },   // 6. Deploy (Top-Right)
    { left: "93.5%", top: "50%" }, // 7. Operate (Right Edge)
    { left: "77%", top: "78%" },   // 8. Improve (Bottom-Right)
  ];

  return (
    <section id="proses" className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-border">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full inline-block bg-foreground" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
              CARA KAMI BEKERJA
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-foreground" style={DISPLAY}>
            Kami tidak langsung membuat. Kami mulai dengan memahami.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl" style={BODY}>
            Proyek digital yang baik biasanya dimulai dari pertanyaan yang tepat. Karena itu, proses kami dibuat sederhana dan transparan agar Anda memahami apa yang sedang dibangun, mengapa hal tersebut dibutuhkan, dan bagaimana prosesnya berjalan.
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x [&::-webkit-scrollbar]:hidden">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "flex flex-col items-center justify-center gap-3 shrink-0 snap-center w-24 h-24 border-2 rounded-2xl transition-all duration-300",
                activeStep === idx
                  ? "border-foreground bg-foreground text-background shadow-lg scale-105"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
            >
              {step.icon}
              <span className="text-[10px] font-bold uppercase tracking-wider" style={MONO}>{step.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-muted border border-border rounded-2xl p-6 min-h-[220px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "var(--accent-color)" }} />
          <h3 className="text-2xl font-bold mb-3 text-foreground" style={DISPLAY}>
            {steps[activeStep].id}. {steps[activeStep].title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6" style={BODY}>
            {steps[activeStep].desc}
          </p>
          <div className="inline-block px-4 py-3 bg-background border border-border rounded-lg w-full">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1" style={MONO}>Output:</p>
            <p className="text-sm font-semibold text-foreground" style={BODY}>{steps[activeStep].output}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Infinity Loop) */}
      <div className="hidden md:flex flex-col items-center w-full mt-10">
        <div className="relative w-full max-w-8xl aspect-[2/1] mx-auto mb-16">
          {/* Background SVG Path */}
          <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full drop-shadow-sm">
            <path
              d="M 750 200 C 750 350, 500 350, 400 200 C 300 50, 50 50, 50 200 C 50 350, 300 350, 400 200 C 500 50, 750 50, 750 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-border dark:text-background/10"
            />
            {/* Animated glowing path over it */}
            <path
              d="M 750 200 C 750 350, 500 350, 400 200 C 300 50, 50 50, 50 200 C 50 350, 300 350, 400 200 C 500 50, 750 50, 750 200"
              fill={"none"}
              stroke={"var(--accent-color)"}
              strokeWidth="8"
              strokeLinecap="round"
              className="opacity-60 animate-[infinity-dash_8s_linear_infinite]"
              pathLength="100"
              strokeDasharray="15 85"
            />
          </svg>

          {/* Nodes */}
          {steps.map((step, idx) => {
            const pos = positions[idx];
            const isActive = activeStep === idx;
            const isBottom = parseInt(pos.top) > 50;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "absolute flex flex-col items-center justify-center w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 transition-all duration-500 z-10 shadow-lg group focus:outline-none cursor-pointer",
                  isActive
                    ? "bg-foreground text-background border-background scale-[1.15] shadow-2xl"
                    : "bg-background text-foreground border-border hover:border-foreground hover:scale-110"
                )}
                style={{ left: pos.left, top: pos.top }}
                title={step.title}
              >
                {step.icon}
                <span className={cn(
                  "absolute whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-opacity duration-300",
                  isBottom ? "-top-8" : "-bottom-8",
                  isActive ? "opacity-100 text-foreground" : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                )} style={MONO}>
                  {step.title}
                </span>

                {/* Ping animation for active */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-foreground opacity-20 animate-ping -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Box below the loop */}
        <div className="w-full max-w-4xl mt-2">
          <div className="relative overflow-hidden border border-border bg-background rounded-2xl">
            {/* Active indicator */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ backgroundColor: LIME }}
            />

            <div className="grid md:grid-cols-[120px_1fr] gap-0">
              {/* Phase Number */}
              <div className="hidden md:flex items-start justify-center pt-10 border-r border-border">
                <span
                  className="text-sm font-bold tracking-[0.2em] text-muted-foreground"
                  style={MONO}
                >
                  {steps[activeStep].id}
                </span>
              </div>

              {/* Main Content */}
              <div className="p-7 md:p-10">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 md:hidden"
                      style={MONO}
                    >
                      Phase {steps[activeStep].id}
                    </p>

                    <h3
                      className="text-2xl md:text-3xl font-black tracking-tight text-foreground"
                      style={DISPLAY}
                    >
                      {steps[activeStep].title}
                    </h3>
                  </div>

                  {/* Active Icon */}
                  <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-muted/40 text-foreground">
                    {steps[activeStep].icon}
                  </div>
                </div>

                <p
                  className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8"
                  style={BODY}
                >
                  {steps[activeStep].desc}
                </p>

                {/* Output */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 pt-5 border-t border-border">
                  <span
                    className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
                    style={MONO}
                  >
                    Output
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {steps[activeStep].output.split(" · ").map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-md border border-border bg-muted/30 text-xs font-medium text-foreground"
                        style={BODY}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes infinity-dash {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
