import React from "react";
import { Container, Title } from "./styles";

interface CardProps {
  children: React.ReactElement | Array<React.ReactElement>;
  title?: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Card;
