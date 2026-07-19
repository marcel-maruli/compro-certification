import Image from "next/image";

import logoImage from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  size?: number;
  compact?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  size = 44,
  compact = false,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className="relative shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-lg shadow-blue-100/60 ring-1 ring-teal-100/70"
        style={{ width: size, height: size }}
      >
        <Image
          src={logoImage}
          alt="VSN logo"
          fill
          sizes={`${size}px`}
          className={cn("object-cover", imageClassName)}
          priority
        />
      </span>
      {!compact ? (
        <div className="leading-none">
          <p className="text-2xl font-extrabold tracking-tight text-slate-900">VSN</p>
        </div>
      ) : null}
    </div>
  );
}
