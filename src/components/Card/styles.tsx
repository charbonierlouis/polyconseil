import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Title = styled.span`
  font-family: roboto;
  font-size: 22px;
  margin-bottom: 10px;
`;
