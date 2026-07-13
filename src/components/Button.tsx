import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
};

type LinkProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };

type ButtonElementProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className">;

const primaryClasses =
  "inline-flex items-center gap-2 rounded-full bg-dorado px-6 py-3 text-sm font-semibold text-on-dorado transition-transform hover:scale-[1.02] active:scale-[0.98]";

const secondaryClasses =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary";

function classesFor(variant: ButtonVariant, className?: string) {
  const base = variant === "primary" ? primaryClasses : secondaryClasses;
  return className ? `${base} ${className}` : base;
}

export function ButtonLink({
  variant = "primary",
  showArrow = variant === "secondary",
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <Link className={classesFor(variant, className)} {...props}>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  showArrow = variant === "secondary",
  className,
  children,
  ...props
}: ButtonElementProps) {
  return (
    <button className={classesFor(variant, className)} {...props}>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </button>
  );
}
