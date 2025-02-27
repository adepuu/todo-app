import { FC, ReactNode } from "react";
import styled from "styled-components";

const Card: FC<{ children: ReactNode; variant?: "square" | "rounded" }> = ({
  children,
  variant = "rounded",
}) => {
  // This variants should be a str map of styled components
  const variants: {
    [key: string]: string;
  } = {
    square: `
        border-radius: 0;
      `,
    rounded: `
        border-radius: 8px;
      `,
  };
  
  const CardWrapper = styled.div`
    background-color: white;
    padding: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    ${variants[variant]}
  `;

  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
