import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Upload, Smartphone, Sparkles, Palette, Type, ChevronRight, ChevronLeft } from "lucide-react";
import type { ConfigState, Brand, Material } from "./types";
import { MODELS, BASE_COLORS, PATTERNS, FONTS, TEXT_COLORS } from "./catalog";
import { cn } from "@/lib/utils";

interface Props {
  config: ConfigState;
  setConfig: (c: ConfigState) => void;
}

const STEPS = [
  { id: 1, label: "Modelo", icon: Smartphone },
  { id: 2, label: "Material", icon: Sparkles },
  { id: 3, label: "Lienzo", icon: Palette },
  { id: 4, label: "Personal", icon: Type },
];

export function ConfigPanel({ config, setConfig }: Props) {
  const [step, setStep] = useState(1);

  return (
    <div className="flex h-full flex-col">
      {/* step tabs */}
      <div className="grid grid-cols-4 gap-2 border-b border-border/50 p-6 pb-4">
        {STEPS.map((s) => {
          const Icon = s.icon;
          const active = step === s.id;
          const done = step > s.id;
          return (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={cn(
                "group relative flex flex-col items-center gap-2 rounded-xl py-3 transition-all",
                active && "bg-primary/10",
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all",
                  active && "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary-glow)]",
                  done && !active && "border-primary/50 bg-primary/20 text-primary-foreground",
                  !active && !done && "border-border text-muted-foreground",
                )}
              >
                {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
              </div>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-widest transition-colors",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* step content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 1 && <StepModel config={config} setConfig={setConfig} />}
            {step === 2 && <StepMaterial config={config} setConfig={setConfig} />}
            {step === 3 && <StepCanvas config={config} setConfig={setConfig} />}
            {step === 4 && <StepPersonal config={config} setConfig={setConfig} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nav */}
      <div className="flex items-center justify-between border-t border-border/50 px-6 py-4">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> Anterior
        </button>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {step} / 4
        </span>
        <button
          onClick={() => setStep(Math.min(4, step + 1))}
          disabled={step === 4}
          className="flex items-center gap-1 text-xs uppercase tracking-widest text-foreground transition hover:text-primary-glow disabled:opacity-30"
        >
          Siguiente <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-primary-glow">{kicker}</p>
      <h3 className="mt-1 font-display text-2xl font-light">{title}</h3>
    </div>
  );
}

function StepModel({ config, setConfig }: Props) {
  return (
    <div>
      <SectionTitle kicker="Paso 01" title="Elige tu modelo" />
      <div className="grid grid-cols-2 gap-3">
        {(["iPhone", "Samsung"] as Brand[]).map((b) => (
          <button
            key={b}
            onClick={() =>
              setConfig({ ...config, brand: b, model: MODELS[b][0] })
            }
            className={cn(
              "rounded-xl border p-5 text-left transition-all",
              config.brand === b
                ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--primary-glow)]"
                : "border-border hover:border-primary/50",
            )}
          >
            <p className="font-display text-lg">{b}</p>
            <p className="text-xs text-muted-foreground">
              {MODELS[b].length} modelos disponibles
            </p>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Modelo específico
        </label>
        <select
          value={config.model}
          onChange={(e) => setConfig({ ...config, model: e.target.value })}
          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        >
          {MODELS[config.brand].map((m) => (
            <option key={m} value={m} className="bg-background">
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function StepMaterial({ config, setConfig }: Props) {
  const materials: { id: Material; desc: string; tag: string }[] = [
    {
      id: "Silicona resistente",
      desc: "Tacto suave, máxima protección anti-golpes.",
      tag: "Mate",
    },
    {
      id: "Acrigel premium",
      desc: "Transparente cristalino con bordes flexibles.",
      tag: "Brillo",
    },
  ];
  return (
    <div>
      <SectionTitle kicker="Paso 02" title="El material" />
      <div className="space-y-3">
        {materials.map((m) => (
          <button
            key={m.id}
            onClick={() => setConfig({ ...config, material: m.id })}
            className={cn(
              "flex w-full items-center justify-between rounded-xl border p-5 text-left transition-all",
              config.material === m.id
                ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--primary-glow)]"
                : "border-border hover:border-primary/50",
            )}
          >
            <div>
              <p className="font-display text-lg">{m.id}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
            </div>
            <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {m.tag}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepCanvas({ config, setConfig }: Props) {
  return (
    <div>
      <SectionTitle kicker="Paso 03" title="El lienzo" />
      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Color base
      </p>
      <div className="mb-8 grid grid-cols-4 gap-3">
        {BASE_COLORS.map((c) => (
          <button
            key={c.id}
            onClick={() => setConfig({ ...config, baseColor: c.value })}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className={cn(
                "h-14 w-14 rounded-full border-2 transition-all",
                config.baseColor === c.value
                  ? "border-primary-glow scale-110 shadow-[0_0_20px_var(--primary-glow)]"
                  : "border-border group-hover:border-primary/50",
              )}
              style={{ backgroundColor: c.value }}
            />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {c.name}
            </span>
          </button>
        ))}
      </div>

      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Patrón / Diseño
      </p>
      <div className="grid grid-cols-4 gap-3">
        {PATTERNS.map((p) => (
          <button
            key={p.id}
            onClick={() =>
              setConfig({ ...config, patternId: p.id === "none" ? null : p.id })
            }
            className={cn(
              "group flex flex-col items-center gap-2",
            )}
          >
            <div
              className={cn(
                "h-14 w-14 overflow-hidden rounded-xl border-2 transition-all",
                (config.patternId === p.id || (!config.patternId && p.id === "none"))
                  ? "border-primary-glow scale-110 shadow-[0_0_20px_var(--primary-glow)]"
                  : "border-border group-hover:border-primary/50",
              )}
              style={{
                backgroundColor: config.baseColor,
                backgroundImage: p.css,
                backgroundSize: p.id === "grid" ? "12px 12px" : undefined,
              }}
            />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepPersonal({ config, setConfig }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setConfig({ ...config, userImage: reader.result as string });
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <SectionTitle kicker="Paso 04" title="Tu toque personal" />

      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Sube una imagen
      </p>
      <div className="mb-2 flex gap-3">
        <button
          onClick={() => fileRef.current?.click()}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-dashed border-primary/50 bg-primary/5 px-4 py-4 text-sm transition hover:bg-primary/10"
        >
          <Upload className="h-4 w-4" />
          {config.userImage ? "Cambiar imagen" : "Subir foto"}
        </button>
        {config.userImage && (
          <button
            onClick={() => setConfig({ ...config, userImage: undefined })}
            className="rounded-xl border border-border px-4 py-4 text-xs uppercase tracking-widest text-muted-foreground transition hover:text-destructive"
          >
            Quitar
          </button>
        )}
      </div>
      <input ref={fileRef} onChange={onFile} type="file" accept="image/*" hidden />

      <div className="mt-8">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Texto personalizado
        </p>
        <input
          type="text"
          maxLength={20}
          value={config.customText}
          onChange={(e) => setConfig({ ...config, customText: e.target.value })}
          placeholder="Tu nombre o frase"
          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Tipografía
          </p>
          <div className="space-y-2">
            {FONTS.map((f) => (
              <button
                key={f.id}
                onClick={() => setConfig({ ...config, textFont: f.value })}
                className={cn(
                  "block w-full rounded-lg border px-3 py-2 text-left text-base transition",
                  config.textFont === f.value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50",
                )}
                style={{ fontFamily: f.value }}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Color
          </p>
          <div className="grid grid-cols-3 gap-2">
            {TEXT_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setConfig({ ...config, textColor: c })}
                className={cn(
                  "h-10 rounded-lg border-2 transition",
                  config.textColor === c
                    ? "border-primary-glow scale-105"
                    : "border-border",
                )}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
