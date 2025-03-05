import { FC, useEffect } from "react";
import Items from "./Items";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/useToDoList";
import { setActiveFilter } from "@/features/todo/slice";

const Filter: FC = () => {
  const dispatch = useDispatch();
  const { metrics, activeFilter } = useAppSelector(({ todoReducer }) => todoReducer);

  const handleClick = (filter: string) => {
    dispatch(setActiveFilter(filter));
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
