import { type ComponentProps } from "react";
import clsx from "clsx";

export default function Input({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={clsx(
        "px-3 py-2 border border-white/60 rounded-lg h-10",
        className
      )}
      {...props}
    />
  );
}
