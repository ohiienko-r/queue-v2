import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 hover:bg-primary/90 px-4 py-[10px] rounded-lg h-10 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary font-semibold text-background-secondary text-sm leading-5",
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
