import React from "react";
import HomeScreen from "./screens/Home";

export default () => {
  const [processList, setProcessList] = React.useState(new Set<number>([]));

  return (
    <HomeScreen processList={processList} setProcessList={setProcessList} />
  );
};
