import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { PhonePreview } from "@/components/configurator/PhonePreview";
import { ConfigPanel } from "@/components/configurator/ConfigPanel";
import { PriceBar } from "@/components/configurator/PriceBar";
import { BASE_COLORS, FONTS, MODELS } from "@/components/configurator/catalog";
import type { ConfigState } from "@/components/configurator/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Case — Configurador de fundas premium" },
      { name: "description", content: "Diseña tu funda de teléfono única. Elige modelo, material, color y añade tu toque personal. $300 MXN, envío gratis." },
      { property: "og:title", content: "Custom Case — Configurador de fundas premium" },
      { property: "og:description", content: "Diseña tu funda única estilo configurador de lujo." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600&family=JetBrains+Mono:wght@400;600&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  component: ConfiguratorPage,
});

function ConfiguratorPage() {
  const [config, setConfig] = useState<ConfigState>({
    brand: "iPhone",
    model: MODELS.iPhone[5],
    material: "Acrigel premium",
    baseColor: BASE_COLORS[1].value,
    patternId: null,
    customText: "",
    textFont: FONTS[0].value,
    textColor: "#FFFFFF",
  });

  return (
    <div className="min-h-screen">
      <Toaster theme="dark" position="top-center" />

      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            CC
          </div>
          <div>
            <p className="font-display text-lg font-medium tracking-tight">Custom Case</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Atelier de fundas
            </p>
          </div>
        </div>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#" className="transition hover:text-foreground">Configurador</a>
          <a href="#" className="transition hover:text-foreground">Catálogo</a>
          <a href="#" className="transition hover:text-foreground">Soporte</a>
        </nav>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">MX · ES</div>
      </header>

      <main className="px-6 pb-8">
        <div className="mx-auto grid h-[calc(100vh-9rem)] max-w-[1600px] grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <section className="glass-panel relative overflow-hidden rounded-3xl">
            <PhonePreview config={config} />
          </section>
          <section className="glass-panel flex flex-col overflow-hidden rounded-3xl">
            <ConfigPanel config={config} setConfig={setConfig} />
            <PriceBar config={config} />
          </section>
        </div>
      </main>
    </div>
  );
}
