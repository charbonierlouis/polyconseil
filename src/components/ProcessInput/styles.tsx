import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1025px) {
    width: 93%;
    justify-content: flex-end;
  }
`;

export const TextInput = styled(TextField)`
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1025px) {
    width: 250px;
    margin-right: 10px !important;
  }
`;
