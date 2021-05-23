import React from "react";
import { Container, SubContainer } from "./styles";
import ProcessInput from "../../components/ProcessInput";
import OutputStream from "../../components/OutputStream";
import WaitingStream from "../../components/WaitingStream";

interface HomeScreenProps {
  processList: Set<number>;
  setProcessList: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const HomeScreen = ({ processList, setProcessList }: HomeScreenProps) => {
  const [output, setOutput] = React.useState("");
  const [waitingOutput, setWaitingOutput] = React.useState<Array<number>>([]);
  const [expectedValue, setExpectedValue] = React.useState(1);

  React.useEffect(() => {
    setWaitingOutput(getWaiting(processList));
  }, [expectedValue]);

  const handleAddProcess = (process: number): void => {
    const copyList = processList;
    copyList.add(process);
    setProcessList(copyList);
    setOutput(getOutput(process, copyList).toString());
    setWaitingOutput(getWaiting(processList));
  };

  const getOutput = (process: number, list: Set<number>): Array<number> => {
    let result: Array<number> = [];
    let expectedValueCopy = expectedValue;
    if (process === expectedValue) {
      let breakWhile = true;
      while (breakWhile) {
        if (list.has(expectedValueCopy)) {
          result.push(expectedValueCopy);
          expectedValueCopy += 1;
        } else breakWhile = false;
      }
    }
    setExpectedValue(expectedValueCopy);
    return result;
  };

  const getWaiting = (list: Set<number>): Array<number> => {
    let result = Array.from(list);
    result.sort();
    return result.slice(expectedValue - 1);
  };

  return (
    <Container>
      <ProcessInput onChange={handleAddProcess} />
      <SubContainer>
        <OutputStream output={output} />
        <WaitingStream data={waitingOutput} />
      </SubContainer>
    </Container>
  );
};

export default HomeScreen;
