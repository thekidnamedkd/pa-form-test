import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@lib/utils";

const inputVariants = cva(
  [
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        xl: "",
        lg: "",
        md: "",
        sm: "",
        xs: "",
      },
    },
    defaultVariants: {
      variant: "md",
    },
  }
);

type InputProps = {};

export interface InputDefault
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants>,
    InputProps {}

const Input = React.forwardRef<HTMLInputElement, InputDefault>(
  ({ variant, className, ...props }, ref) => {
    return (
      <input
        className={"text-gray-700" + cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
