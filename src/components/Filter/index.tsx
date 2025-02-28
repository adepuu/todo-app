import { FC } from "react";

const Filter: FC = () => {
  return (
    <div className="py-4 w-full flex justify-around fixed bottom-0 left-0 bg-white">
      <div className="flex justify-center items-center flex-col">
        <img src="/Playlist.svg" alt="filter" />
        <span>All</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src="/Tick.svg" alt="filter" />
        <span>Completed</span>
      </div>
    </div>
  );
};
export default Filter;
