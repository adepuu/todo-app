import styled from "styled-components";
import { TODO } from "../../constants/todo";
import { FC } from "react";

const ToDo: FC<TODO> = ({ id, title, description }) => {
  const ToDoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const ToDoTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: "#9395D3";
  `;

  const ActionButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  `;

  return (
    <ToDoWrapper id={`todo-${id}-${title}-${description}`}>
      <div>
        <ToDoTitle>{title}</ToDoTitle>
        <div>{description}</div>
      </div>
      <ActionButtonGroup>
        <img width={25} height={25} src="/Pencil.png" alt="edit" />
        <img width={25} height={25} src="/Trash.png" alt=" delete" />
        <img width={25} height={25} src="/CheckCircle.png" alt="check" />
      </ActionButtonGroup>
    </ToDoWrapper>
  );
};

export default ToDo;
