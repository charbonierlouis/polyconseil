import React from "react";
import { Stream } from "./styles";
import Output from "../Output";
import Card from "../Card";

interface WaitingStreamProps {
  data: Array<number>;
}

const OutputStream = ({ data }: WaitingStreamProps) => {
  return (
    <Card title="En attentes">
      <Stream>
        {data.map((item, key) => {
          return (
            <Output key={key} severity="warning">
              {item}
            </Output>
          );
        })}
      </Stream>
    </Card>
  );
};
export default OutputStream;
