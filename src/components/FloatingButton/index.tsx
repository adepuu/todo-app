import { FC } from "react";
import styled from "styled-components";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  const FloatingButtonWrapper = styled.button`
    position: fixed;
    bottom: 100px;
    right: 22px;
    border-radius: 50%;
    background-color: #9395d3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <FloatingButtonWrapper onClick={onClick}>
      <img width={21} src="/plus.png" alt="add" />
    </FloatingButtonWrapper>
  );
}

export default FloatingButton;