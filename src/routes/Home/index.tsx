import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { DummyToDo } from "../../constants/todo";
import ToDo from "../../components/ToDo";
import Filter from "../../components/Filter";
import FloatingButton from "../../components/FloatingButton";

const IndexPage = () => {
  const navigate = useNavigate();

  const handleRedirectToCreate = () => {
    // Redirect to create page using react-router-dom
    navigate("/create");
  };

  return (
    <div className="bg-primary relative">
      <Header />
      <div className="bg-secondary-light flex flex-col justify-center items-center mt-20 mb-20 py-5 px-2 gap-5 min-h-screen">
        {DummyToDo.map((todo) => (
          <Card key={todo.id}>
            <ToDo {...todo} />
          </Card>
        ))}
      </div>
      <Filter />
      <FloatingButton onClick={handleRedirectToCreate}/>
    </div>
  );
};

export default IndexPage;
