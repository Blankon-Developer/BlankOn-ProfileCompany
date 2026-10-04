"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Globe } from "lucide-react";
import { DISPLAY, BODY, MONO, cn } from "@/lib/utils";
import { TeamDepartment } from "@/lib/team-data";

interface TeamClientProps {
  serviceName: string;
  teamDepartments: TeamDepartment[];
}

export default function TeamClient({ serviceName, teamDepartments }: TeamClientProps) {
  const [openDepts, setOpenDepts] = useState<Record<string, boolean>>({});

  // Buka tab pertama secara otomatis jika di desktop
  useEffect(() => {
    if (teamDepartments.length > 0) {
      setOpenDepts({ [teamDepartments[0].id]: true });
    }
  }, [teamDepartments]);

  const toggleDept = (id: string) => {
    setOpenDepts(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="px-6 py-20 md:px-28 md:py-12 md:pb-30 mx-auto max-w-8xl relative overflow-hidden">
      {/* Intro */}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end mb-16 md:mb-0 ">
        <div>
          <div
          className="absolute -bottom-70 left-1/2 -translate-x-1/2 w-full h-[350px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, var(--accent-color) 5% 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
          <span
            className="mb-5 block text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground"
            style={BODY}
          >
            BlankOn Digital Tech | {serviceName} Team
          </span>
          <h3
            className="max-w-full text-[clamp(2rem,4vw,2rem)] font-medium leading-[0.92] tracking-[-0.055em] text-foreground"
            style={DISPLAY}
          >
            Orang-orang yang berperan dalam <span className="text-[var(--accent-color)]">{serviceName}.</span>
          </h3>
        </div>
        <p
          className="max-w-full text-sm leading-7 text-muted-foreground lg:justify-self-end pb-2 text-justify"
          style={BODY}
        >
          Dibangun dari berbagai disiplin, pengalaman, dan perspektif
          yang bekerja bersama untuk menghasilkan sesuatu yang berarti.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
        {/* Mobile Accordion View */}
        <div className="w-full border-t border-border lg:hidden mt-10">
          {teamDepartments.map((dept, index) => {
            const isOpen = !!openDepts[dept.id];
            return (
              <div key={dept.id} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggleDept(dept.id)}
                  aria-expanded={isOpen}
                  className="group relative flex w-full items-center gap-4 py-6 text-left focus-visible:outline-none"
                >
                  <span className={cn("absolute left-0 top-0 h-full w-[2px] bg-foreground origin-top transition-transform duration-300", isOpen ? "scale-y-100" : "scale-y-0")} />
                  <span className={cn("w-8 shrink-0 text-[10px] tabular-nums transition-colors pl-2", isOpen ? "text-foreground" : "text-muted-foreground/40")} style={MONO}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className={cn("text-xl font-medium tracking-tight transition-transform duration-300", isOpen && "translate-x-1")} style={DISPLAY}>{dept.name}</h4>
                  </div>
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <span className="absolute h-px w-3 bg-foreground transition-transform duration-300" />
                    <span className={cn("absolute h-px w-3 bg-foreground transition-transform duration-300", isOpen ? "rotate-0" : "rotate-90")} />
                  </span>
                </button>

                <div className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <div className="pb-10 pt-2 pl-2">
                      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-6">
                        {dept.members.map((member, mIndex) => (
                          <article key={member.name} className="group/member flex flex-col">
                            <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-muted">
                              <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover grayscale transition-all duration-700 ease-out group-hover/member:scale-[1.025] group-hover/member:grayscale-0" />
                              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/30 to-transparent p-4">
                                <span className="text-[10px] text-white/90 font-medium" style={MONO}>{String(mIndex + 1).padStart(2, "0")}</span>
                              </div>
                            </div>
                            <div className="flex flex-col flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h5 className="text-lg font-medium tracking-tight" style={DISPLAY}>{member.name}</h5>
                                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground" style={BODY}>{member.role}</p>
                                </div>
                                <div className="flex gap-2 pt-1 shrink-0">
                                  <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={14} strokeWidth={1.5} /></a>
                                  <a href="#" className="text-muted-foreground hover:text-foreground"><Globe size={14} strokeWidth={1.5} /></a>
                                </div>
                              </div>
                              <p className="mt-4 text-sm leading-6 text-muted-foreground flex-1" style={BODY}>{member.desc}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Split View */}
        <div className="w-full mt-12 hidden lg:flex items-start">
          {/* Left */}
          <div
            className={cn(
              "border-t border-border relative max-w-8xl mx-auto transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]",
              Object.values(openDepts).some(Boolean) ? "w-[450px] shrink-0" : "w-full mx-auto shrink-0"
            )}
          >
            <div className="sticky top-32 w-full">
              {teamDepartments.map((dept, index) => {
                const isOpen = !!openDepts[dept.id];
                return (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => toggleDept(dept.id)}
                    aria-expanded={isOpen}
                    className={cn("group relative flex w-full items-start gap-4 border-b border-border py-6 text-left transition-colors duration-200 cursor-pointer", isOpen ? "bg-muted/30" : "hover:bg-muted/10")}
                  >
                    <span className={cn("absolute -left-px top-0 h-full w-[2px] bg-foreground origin-top transition-transform duration-300", isOpen ? "scale-y-100" : "scale-y-0")} />
                    <span className={cn("pt-1.5 pl-4 text-[10px] tabular-nums transition-colors", isOpen ? "text-foreground" : "text-muted-foreground/40")} style={MONO}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 pr-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className={cn("text-lg font-medium tracking-tight transition-transform duration-300", isOpen ? "translate-x-1 text-foreground" : "text-muted-foreground group-hover:text-foreground")} style={DISPLAY}>
                          {dept.name}
                        </h4>
                        <span className="text-[10px] tabular-nums text-muted-foreground" style={MONO}>
                          {String(dept.members.length).padStart(1, "0")} People
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div
            className={cn(
              "border-border min-h-[100px] transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] overflow-hidden",
              Object.values(openDepts).some(Boolean) ? "flex-1 border-l opacity-100 pl-4 lg:pl-10" : "w-0 opacity-0 border-l-0 pl-0 flex-none"
            )}
          >
            <div className="min-w-0 w-full">
              {teamDepartments.map((dept) => {
                const isOpen = !!openDepts[dept.id];
                return (
                  <div key={dept.id} className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-10 lg:px-0 pb-16 lg:pb-0">
                        <div className="flex items-end justify-between border-b border-border py-6 mb-10">
                          <div>
                            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={BODY}>Team</p>
                            <h4 className="text-2xl font-medium tracking-tight" style={DISPLAY}>{dept.name}</h4>
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground" style={MONO}>
                            {String(dept.members.length).padStart(2, "0")} People
                          </span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

                          {dept.members.map((member, index) => (
                            <article key={member.name} className="group/member flex flex-col h-full">
                              <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-muted">
                                <Image src={member.image} alt={member.name} fill sizes="33vw" className="object-cover grayscale transition-all duration-700 ease-out group-hover/member:scale-[1.025] group-hover/member:grayscale-0" />
                                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/40 to-transparent p-5">
                                  <span className="text-[10px] font-medium text-white/90" style={MONO}>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                              </div>
                              <div className="flex flex-col flex-1">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h5 className="text-lg font-medium tracking-[-0.02em]" style={DISPLAY}>{member.name}</h5>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground" style={BODY}>{member.role}</p>
                                  </div>
                                  <div className="flex gap-2 pt-1 shrink-0">
                                    <a href={member.linkedln || "#"} className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin size={14} strokeWidth={1.5} /></a>
                                    <a href={member.website || "#"} className="text-muted-foreground transition-colors hover:text-foreground"><Globe size={14} strokeWidth={1.5} /></a>
                                  </div>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-justify text-muted-foreground flex-1" style={BODY}>{member.desc}</p>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
