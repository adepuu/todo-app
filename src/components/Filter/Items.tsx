import { cn } from "@/utils/cn";
import { FC } from "react";

interface ItemsProps {
  isActive: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}

const Items: FC<ItemsProps> = ({ isActive, onClick, icon, label }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex justify-center items-center flex-col",
        isActive && "text-primary font-bold"
      )}
    >
      <img
        src={icon}
        alt="filter"
        className={cn(!isActive && "brightness-0")}
      />
      <span>
        {label}
      </span>
    </div>
  );
};

export default Items;
