import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 px-4 py-[10px] rounded-lg h-10 font-semibold text-sm leading-5 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-background-secondary hover:bg-primary/90 ",
        destructive: "bg-red-600 text-white hover:bg-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Button({
  className,
  variant,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={clsx(buttonVariants({ variant, className }))}
      {...props}
    ></button>
  );
}
