import styled from "styled-components";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { DummyToDo } from "../../constants/todo";
import ToDo from "../../components/ToDo";

const IndexPage = () => {
  const IndexPageWrapper = styled.div`
    background-color: #b3b7ee;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    padding: 20px 8px;
    gap: 20px;
  `;

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
    </IndexPageWrapper>
  );
};

export default IndexPage;
