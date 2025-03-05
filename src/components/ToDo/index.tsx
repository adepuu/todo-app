import { TODO } from "@/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ToDoProps extends TODO {
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
}

const ToDo: FC<ToDoProps> = ({
  id,
  title,
  description,
  isComplete,
  handleComplete,
  handleDelete,
}) => {
  const navigate = useNavigate();

  const redirectToEdit = () => {
    const queryParam = new URLSearchParams();
    queryParam.append("id", id);
    navigate(`/create?${queryParam.toString()}`);
  }

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
          <img width={25} height={25} src="/Pencil.png" alt="edit" onClick={redirectToEdit}/>
          <img
            width={25}
            height={25}
            src="/Trash.png"
            alt=" delete"
            onClick={() => handleDelete(id)}
          />
          <img
            width={25}
            height={25}
            src="/CheckCircle.png"
            alt="check"
            onClick={() => handleComplete(id)}
          />
        </div>
      )}
    </div>
  );
};

export default ToDo;
