import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ToDo from "@/components/ToDo";
import Filter from "@/components/Filter";
import FloatingButton from "@/components/FloatingButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/useToDoList";
import { completeTodo, deleteTodo } from "@/features/todo/slice";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { todos } = useAppSelector(({ todoReducer }) => todoReducer);
  const navigate = useNavigate();

  const handleRedirectToCreate = () => {
    // Redirect to create page using react-router-dom
    navigate("/create");
  };

  const handleDelete = (id: string) => {
    // Dispatch action to delete todo
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id: string) => {
    // Dispatch action to mark todo as complete
    dispatch(completeTodo(id));
  };

  return (
    <div className="bg-primary relative">
      <Header />
      <div className="bg-secondary-light flex flex-col justify-center items-center mt-20 mb-20 py-5 px-2 gap-5 min-h-screen">
        {todos.length === 0 && (
          <p className="text-white text-2xl font-bold">No ToDo's found</p>
        )}
        {todos.map((todo) => (
          <Card key={todo.id}>
            <ToDo handleDelete={handleDelete} handleComplete={handleComplete} {...todo} />
          </Card>
        ))}
      </div>
      <Filter />
      <FloatingButton onClick={handleRedirectToCreate} />
    </div>
  );
};

export default IndexPage;
