import Image from "next/image";
import { cn } from "@/lib/cn";

const W = 1206;
const H = 2622;

/**
 * iPhone device frame around a real app screenshot.
 * Uses intrinsic width/height (not `fill`) so the frame can never collapse to
 * zero size. Light/dark sources swap via CSS to match the theme.
 */
export function DeviceFrame({
  light,
  dark,
  alt,
  priority = false,
  className,
  maxWidth = 320,
  sizes = "(max-width: 768px) 70vw, 320px",
}: {
  light: string;
  dark: string;
  alt: string;
  priority?: boolean;
  className?: string;
  maxWidth?: number;
  sizes?: string;
}) {
  return (
    <div
      className={cn("device w-full", className)}
      style={{ maxWidth }}
    >
      <div className="device-screen">
        <Image
          src={light}
          alt={alt}
          width={W}
          height={H}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full dark:hidden"
        />
        <Image
          src={dark}
          alt={alt}
          width={W}
          height={H}
          sizes={sizes}
          priority={priority}
          className="hidden h-auto w-full dark:block"
        />
      </div>
    </div>
  );
}
