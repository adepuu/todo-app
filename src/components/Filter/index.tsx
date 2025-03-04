import { FC, useEffect } from "react";
import Items from "./Items";
import { useToDoContext } from "@/context/ToDoContext";

const Filter: FC = () => {
  const { metrics, activeFilter, setActiveFilter } = useToDoContext();

  const handleClick = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    console.log("active filter changed to: ", activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-4 w-full flex justify-around fixed bottom-0 left-0 bg-white">
      <Items
        isActive={activeFilter === "all"}
        onClick={() => handleClick("all")}
        icon="/Playlist.svg"
        label={`All (${metrics.total})`}
      />
      <Items
        isActive={activeFilter === "completed"}
        onClick={() => handleClick("completed")}
        icon="/Tick.svg"
        label={`Completed (${metrics.completed})`}
      />
    </div>
  );
};
export default Filter;
