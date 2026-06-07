import type { Brand } from "./types";

export const MODELS: Record<Brand, string[]> = {
  iPhone: [
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",

    "iPhone 13",
    "iPhone 13 Mini",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",

    "iPhone 14",
    "iPhone 14 Plus",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",

    "iPhone 15",
    "iPhone 15 Plus",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",

    "iPhone 16",
    "iPhone 16 Plus",
    "iPhone 16 Pro",
    "iPhone 16 Pro Max",

    "iPhone 17",
    "iPhone 17 Air",
    "iPhone 17 Pro",
    "iPhone 17 Pro Max",
  ],
  Samsung: [
    "Galaxy S22",
    "Galaxy S23",
    "Galaxy S23 Ultra",
    "Galaxy S24",
    "Galaxy S24 Ultra",
    "Galaxy A54",
    "Galaxy Z Flip 5",
  ],
};

export const BASE_COLORS = [
  { id: "midnight", name: "Midnight", value: "oklch(0.15 0.02 300)" },
  { id: "violet", name: "Violet", value: "oklch(0.4 0.2 305)" },
  { id: "orchid", name: "Orchid", value: "oklch(0.55 0.22 320)" },
  { id: "rose", name: "Rose", value: "oklch(0.65 0.2 10)" },
  { id: "mint", name: "Mint", value: "oklch(0.78 0.13 170)" },
  { id: "lemon", name: "Lemon", value: "oklch(0.9 0.16 100)" },
  { id: "cream", name: "Cream", value: "oklch(0.94 0.03 80)" },
  { id: "sky", name: "Sky", value: "oklch(0.78 0.13 230)" },
];

export const PATTERNS = [
  { id: "none", name: "Liso", css: undefined },
  {
    id: "graffiti",
    name: "Graffiti",
    css: "repeating-linear-gradient(45deg, oklch(1 0 0 / 0.12) 0 12px, transparent 12px 28px), radial-gradient(circle at 20% 30%, oklch(0.7 0.25 320 / 0.4), transparent 50%)",
  },
  {
    id: "abstract",
    name: "Abstracto",
    css: "radial-gradient(circle at 20% 80%, oklch(0.65 0.25 320 / 0.5), transparent 40%), radial-gradient(circle at 80% 20%, oklch(0.7 0.2 200 / 0.4), transparent 40%)",
  },
  {
    id: "stickers",
    name: "Stickers",
    css: "radial-gradient(circle at 25% 25%, oklch(0.9 0.18 80) 0 18px, transparent 19px), radial-gradient(circle at 75% 60%, oklch(0.65 0.25 350) 0 22px, transparent 23px), radial-gradient(circle at 40% 80%, oklch(0.78 0.15 170) 0 16px, transparent 17px)",
  },
  {
    id: "waves",
    name: "Olas",
    css: "repeating-radial-gradient(circle at 50% 120%, oklch(1 0 0 / 0.15) 0 8px, transparent 8px 24px)",
  },
  {
    id: "grid",
    name: "Grid Neon",
    css: "linear-gradient(oklch(0.7 0.25 310 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.25 310 / 0.4) 1px, transparent 1px)",
  },
  {
    id: "marble",
    name: "Mármol",
    css: "radial-gradient(ellipse at 30% 40%, oklch(1 0 0 / 0.25), transparent 50%), radial-gradient(ellipse at 70% 70%, oklch(0 0 0 / 0.3), transparent 50%)",
  },
  {
    id: "stars",
    name: "Galaxia",
    css: "radial-gradient(circle at 15% 25%, white 1px, transparent 2px), radial-gradient(circle at 65% 45%, white 1px, transparent 2px), radial-gradient(circle at 85% 75%, white 1.5px, transparent 2.5px), radial-gradient(circle at 35% 85%, white 1px, transparent 2px)",
  },
];

export const FONTS = [
  { id: "display", name: "Display", value: '"Space Grotesk", sans-serif' },
  { id: "serif", name: "Serif", value: '"Playfair Display", serif' },
  { id: "mono", name: "Mono", value: '"JetBrains Mono", monospace' },
  { id: "script", name: "Script", value: '"Caveat", cursive' },
];

export const TEXT_COLORS = ["#FFFFFF", "#000000", "#D946EF", "#FACC15", "#22D3EE", "#F472B6"];
