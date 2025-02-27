import { FC } from "react";
import styled from "styled-components";

const Filter: FC = () => {
  const FilterWrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
  `;

  const FilterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <FilterWrapper>
      <FilterItem>
        <img src="/Playlist.svg" alt="filter" />
        <span>All</span>
      </FilterItem>
      <FilterItem>
        <img src="/Tick.svg" alt="filter" />
        <span>Completed</span>
      </FilterItem>
    </FilterWrapper>
  );
};
export default Filter;
