import { motion, AnimatePresence } from "framer-motion";
import type { ConfigState } from "./types";
import { PATTERNS } from "./catalog";

interface Props {
  config: ConfigState;
}

export function PhonePreview({ config }: Props) {
  const pattern = PATTERNS.find((p) => p.id === config.patternId);
  const isSamsung = config.brand === "Samsung";

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="absolute left-8 top-8 z-10 space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Custom Case · Preview
        </p>
        <h2 className="font-display text-3xl font-light text-foreground">
          {config.brand} <span className="text-gradient font-medium">{config.model}</span>
        </h2>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{config.material}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
          style={{ perspective: 1200 }}
        >
          <motion.div
            animate={{ rotateY: [0, 6, 0, -6, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <PhoneFrame
              color={config.baseColor}
              pattern={pattern?.css}
              material={config.material}
              isSamsung={isSamsung}
              userImage={config.userImage}
              customText={config.customText}
              textColor={config.textColor}
              textFont={config.textFont}
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />
    </div>
  );
}

interface FrameProps {
  color: string;
  pattern?: string;
  material: string;
  isSamsung: boolean;
  userImage?: string;
  customText: string;
  textColor: string;
  textFont: string;
}

function PhoneFrame({
  color,
  pattern,
  material,
  isSamsung,
  userImage,
  customText,
  textColor,
  textFont,
}: FrameProps) {
  const isSilicone = material === "Silicona resistente";

  return (
    <div
      className="relative h-[560px] w-[280px] rounded-[52px] p-[6px] shadow-2xl"
      style={{
        background: "linear-gradient(145deg, oklch(0.35 0.05 300), oklch(0.15 0.03 300))",
        boxShadow: "0 50px 100px -20px oklch(0 0 0 / 0.7), inset 0 1px 2px oklch(1 0 0 / 0.1)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${color}-${pattern}-${material}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="relative h-full w-full overflow-hidden rounded-[46px]"
          style={{
            backgroundColor: color,
            backgroundImage: pattern,
            boxShadow: isSilicone
              ? "inset 0 0 40px oklch(0 0 0 / 0.3)"
              : "inset 0 0 60px oklch(1 0 0 / 0.15)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: isSilicone
                ? "radial-gradient(circle at 30% 10%, oklch(1 0 0 / 0.08), transparent 50%)"
                : "linear-gradient(135deg, oklch(1 0 0 / 0.18) 0%, transparent 40%, oklch(1 0 0 / 0.12) 100%)",
            }}
          />

          {userImage && (
            <img
              src={userImage}
              alt="custom"
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-lg"
            />
          )}

          {customText && (
            <div
              className="absolute inset-x-0 bottom-16 px-6 text-center text-2xl"
              style={{
                color: textColor,
                fontFamily: textFont,
                textShadow: "0 2px 12px oklch(0 0 0 / 0.4)",
              }}
            >
              {customText}
            </div>
          )}

          <div
            className="absolute left-5 top-5 rounded-2xl p-2"
            style={{
              background: "linear-gradient(145deg, oklch(0.25 0.03 300), oklch(0.12 0.02 300))",
              boxShadow: "0 4px 14px oklch(0 0 0 / 0.5)",
            }}
          >
            {isSamsung ? (
              <div className="flex flex-col gap-1.5">
                <Lens />
                <Lens />
                <Lens />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1.5">
                <Lens />
                <Lens />
                <Lens />
                <div className="h-6 w-6 rounded-full bg-black/40" />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute -left-1 top-28 h-10 w-1 rounded-full bg-black/60" />
      <div className="absolute -left-1 top-44 h-16 w-1 rounded-full bg-black/60" />
      <div className="absolute -right-1 top-36 h-20 w-1 rounded-full bg-black/60" />
    </div>
  );
}

function Lens() {
  return (
    <div
      className="h-6 w-6 rounded-full"
      style={{
        background: "radial-gradient(circle at 35% 35%, oklch(0.5 0.05 300), oklch(0.08 0.01 300) 70%)",
        boxShadow: "inset 0 0 4px oklch(0 0 0 / 0.8)",
      }}
    />
  );
}
