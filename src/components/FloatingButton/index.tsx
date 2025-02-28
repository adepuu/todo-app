import { FC } from "react";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-[100px] right-[22px] rounded-full bg-primary shadow-lg w-[70px] h-[70px] flex justify-center items-center"
    >
      <img width={21} src="/plus.png" alt="add" />
    </button>
  );
}

export default FloatingButton;