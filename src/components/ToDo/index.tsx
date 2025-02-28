import { FC } from "react";
import { TODO } from "../../constants/todo";

const ToDo: FC<TODO> = ({ id, title, description }) => {
  return (
    <div id={`${id}-todo`} className="flex justify-between items-center">
      <div>
        <div className="text-sm font-bold text-primary">{title}</div>
        <div>{description}</div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <img width={25} height={25} src="/Pencil.png" alt="edit" />
        <img width={25} height={25} src="/Trash.png" alt=" delete" />
        <img width={25} height={25} src="/CheckCircle.png" alt="check" />
      </div>
    </div>
  );
};

export default ToDo;
