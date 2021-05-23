import React from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Container, TextInput } from "./styles";

interface ProcessInputProps {
  onChange: (process: number) => void;
}

const ProcessInput = ({ onChange }: ProcessInputProps) => {
  const [value, setValue] = React.useState<string>("");

  const handleSendProcess = () => {
    const process = parseInt(value);
    onChange(process);
    setValue("");
  };

  return (
    <Container>
      <TextInput
        label="Process ID"
        variant="outlined"
        type="number"
        value={value}
        onChange={(item) => {
          setValue(item.target.value);
        }}
      />
      <Button variant="outlined" color="primary" onClick={handleSendProcess}>
        <SendIcon fontSize="small" color="primary" />
      </Button>
    </Container>
  );
};

export default ProcessInput;
