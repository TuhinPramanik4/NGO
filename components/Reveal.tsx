"use client";

import useInView from "@/components/useInView";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  id,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
