import type { ComponentPropsWithoutRef, ElementType } from "react";

type SectionLabelProps<T extends ElementType = "p"> = {
  as?: T;
  number: string;
  title: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionLabel<T extends ElementType = "p">({
  as,
  number,
  title,
  className,
  ...props
}: SectionLabelProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={["section-label", className].filter(Boolean).join(" ")}
      {...props}
    >
      <span>{number}</span>
      <span className="section-label__dash" aria-hidden="true" />
      <span>{title}</span>
    </Component>
  );
}
