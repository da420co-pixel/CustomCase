export type Brand = "iPhone" | "Samsung";
export type Material = "Silicona resistente" | "Acrigel premium";

export interface ConfigState {
  brand: Brand;
  model: string;
  material: Material;
  baseColor: string;
  patternId: string | null;
  userImage?: string;
  customText: string;
  textFont: string;
  textColor: string;
}
