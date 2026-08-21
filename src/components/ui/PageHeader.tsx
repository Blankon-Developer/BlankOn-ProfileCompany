import { DISPLAY, BODY, MONO } from "@/lib/utils";

interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export function PageHeader({ tag, title, description }: PageHeaderProps) {
  return (
    <section className="pt-[140px] md:pt-[180px] pb-12 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6 max-w-5xl">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mb-4 w-fit opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="w-2 h-2 rounded-none inline-block"
            style={{ backgroundColor: "var(--accent-color)" }}
          />
          <span
            className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold"
            style={MONO}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-[-0.04em] text-foreground opacity-0 animate-fade-up"
          style={{ ...DISPLAY, animationDelay: "200ms" }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-4 max-w-[800px] opacity-0 animate-fade-up"
          style={{ ...BODY, animationDelay: "300ms" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
