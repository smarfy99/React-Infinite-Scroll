import React from "react";
import "./App.css";
import mockAPI from "./API/mockAPI";
import styled from "styled-components";

function App() {
  const [data, loading, error] = mockAPI();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      {data.map((item, index) => (
        <Card key={index} item={item}></Card>
      ))}
    </Container>
  );
}

export default App;

//container 관련
export const Container = ({ children }: ContainerProps) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px;
`;

//card 관련
export const Card = ({ item }: CardProps) => {
  return (
    <CardWrapper>
      <IdStyle>{item.id}</IdStyle>
      <Title>{item.title}</Title>
      <Body>{item.body}</Body>
    </CardWrapper>
  );
};

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CardProps {
  item: Data;
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 768px;
  background-color: #e8c553;
  padding: 32px;
  margin-bottom: 32px;
  min-width: 100px;
`;

const IdStyle = styled.section`
  font-size: 14px;
  margin: 12px 0px;
`;

const Title = styled.header`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Body = styled.section`
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
