import { FC } from "react";
import { TODO } from "../../constants/todo";

interface ToDoProps extends TODO {
  handleComplete: (id: string) => void;
}

const ToDo: FC<ToDoProps> = ({ id, title, description, isComplete, handleComplete }) => {
  return (
    <div id={`${id}-todo`} className="flex justify-between items-center">
      <div>
        <div className="text-sm font-bold text-primary">{title}</div>
        <div>{description}</div>
      </div>
      {isComplete ? (
        <span className="text-green-500">Completed</span>
      ) : (
        <div className="flex gap-5 justify-center items-center">
          <img width={25} height={25} src="/Pencil.png" alt="edit" />
          <img width={25} height={25} src="/Trash.png" alt=" delete" />
          <img width={25} height={25} src="/CheckCircle.png" alt="check" onClick={() => handleComplete(id)} />
        </div>
      )}
    </div>
  );
};

export default ToDo;
