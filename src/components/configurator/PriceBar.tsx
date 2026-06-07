import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { ConfigState } from "./types";
import { PATTERNS } from "./catalog";
import { toast } from "sonner";

export function PriceBar({ config }: { config: ConfigState }) {
  const pattern = PATTERNS.find((p) => p.id === config.patternId)?.name ?? "Liso";
  const extras = [
    config.userImage ? "Foto" : null,
    config.customText ? `"${config.customText}"` : null,
  ].filter(Boolean);

  return (
    <div className="border-t border-border/50 p-6">
      <div className="mb-4 space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Modelo</span>
          <span className="text-foreground">{config.brand} {config.model}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Material</span>
          <span className="text-foreground">{config.material}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Diseño</span>
          <span className="text-foreground">{pattern}</span>
        </div>
        {extras.length > 0 && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Personal</span>
            <span className="text-foreground">{extras.join(" + ")}</span>
          </div>
        )}
      </div>

      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Total</p>
          <p className="font-display text-4xl font-light">
            <span className="text-gradient">$300</span>
            <span className="ml-2 text-base text-muted-foreground">MXN</span>
          </p>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Envío gratis</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => toast.success("Funda agregada al carrito", { description: `${config.brand} ${config.model} · ${config.material}` })}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[0_20px_50px_-15px_var(--primary-glow)]"
        style={{ background: "var(--gradient-brand)" }}
      >
        <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.65 0.25 320), oklch(0.45 0.22 305))" }} />
        <ShoppingBag className="relative z-10 h-4 w-4" />
        <span className="relative z-10">Agregar al carrito</span>
      </motion.button>
    </div>
  );
}
