import {
  Landmark,
  ShieldAlert,
  Users,
  Hammer,
  ShoppingCart,
  Banknote,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type MateriaKey =
  | "constitutional"
  | "criminal"
  | "civil"
  | "labor"
  | "commercial"
  | "tax"
  | "amparo";

const MAP: Record<MateriaKey, { Icon: LucideIcon; hue: string; tint: string }> =
  {
    constitutional: { Icon: Landmark, hue: "var(--m-const)", tint: "rgba(176,138,58,0.14)" },
    criminal: { Icon: ShieldAlert, hue: "var(--m-penal)", tint: "rgba(180,84,63,0.14)" },
    civil: { Icon: Users, hue: "var(--m-civil)", tint: "rgba(63,122,94,0.14)" },
    labor: { Icon: Hammer, hue: "var(--m-labor)", tint: "rgba(58,95,147,0.14)" },
    commercial: { Icon: ShoppingCart, hue: "var(--m-merc)", tint: "rgba(106,90,147,0.14)" },
    tax: { Icon: Banknote, hue: "var(--m-fisc)", tint: "rgba(176,138,58,0.14)" },
    amparo: { Icon: Shield, hue: "var(--m-amp)", tint: "rgba(138,106,31,0.14)" },
  };

export function MateriaIcon({ k }: { k: MateriaKey }) {
  const { Icon, hue, tint } = MAP[k];
  return (
    <span
      className="grid size-11 shrink-0 place-items-center rounded-xl"
      style={{ background: tint, color: hue, boxShadow: `inset 0 0 0 1px ${hue}33` }}
    >
      <Icon className="size-[22px]" strokeWidth={1.8} />
    </span>
  );
}

export const MATERIA_ORDER: MateriaKey[] = [
  "constitutional",
  "criminal",
  "civil",
  "labor",
  "commercial",
  "tax",
  "amparo",
];
