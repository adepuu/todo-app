import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

const Card: FC<{ children: ReactNode; variant?: "square" | "rounded" }> = ({
  children,
  variant = "rounded",
}) => {
  const variantClasses = {
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  return (
    <div className={cn("bg-white p-6 shadow-md", variantClasses[variant])}>
      {children}
    </div>
  );
};

export default Card;
