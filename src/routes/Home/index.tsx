import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { DummyToDo } from "../../constants/todo";
import ToDo from "../../components/ToDo";
import Filter from "../../components/Filter";
import FloatingButton from "../../components/FloatingButton";

const IndexPage = () => {
  const navigate = useNavigate();
  const IndexPageWrapper = styled.div`
    background-color: #b3b7ee;
    position: relative;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 20px 8px;
    gap: 20px;
    min-height: 100vh;
  `;

  const handleRedirectToCreate = () => {
    // Redirect to create page using react-router-dom
    navigate("/create");
  };

  return (
    <IndexPageWrapper>
      <Header />
      <ContentWrapper>
        {DummyToDo.map((todo) => (
          <Card key={todo.id}>
            {/* Below is using spread operator */}
            <ToDo {...todo} />
            {/* Below is individual assignment */}
            {/* <ToDo
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isComplete={todo.isComplete}
            /> */}
          </Card>
        ))}
      </ContentWrapper>
      <Filter />
      <FloatingButton onClick={handleRedirectToCreate}/>
    </IndexPageWrapper>
  );
};

export default IndexPage;
