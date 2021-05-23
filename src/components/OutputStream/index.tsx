import React from "react";
import { Stream } from "./styles";
import Output from "../Output";
import Card from "../Card";

interface OutputStreamProps {
  output: string;
}

const OutputStream = ({ output }: OutputStreamProps) => {
  const [stream, setStream] = React.useState<Array<string>>([]);
  React.useEffect(() => {
    if (output && output !== "") setStream([...stream, output]);
  }, [output]);

  return (
    <Card title="Paquets envoyés">
      <Stream>
        {stream.map((item, key) => {
          return (
            <Output key={key} severity="success">
              {item}
            </Output>
          );
        })}
      </Stream>
    </Card>
  );
};
export default OutputStream;
