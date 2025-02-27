import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  const Header = styled.header`
    background-color: #9395d3;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;

    img {
      margin-right: 18px;
    }
  `;

  const H1 = styled.h1`
    margin: 0;
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 18px;
  `;

  return (
    <Header>
      <H1>TODO APP</H1>
      <img height={32} width={32} src="/calendar.png" alt="calendar" />
    </Header>
  );
};

export default Header;
