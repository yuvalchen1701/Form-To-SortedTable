import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import { useState } from "react";
export default function App() {
  const [dataList, setDataList] = useState([]);

  const addNewRow = (data) => {
    const {
      candidateName: name,
      algorithmQuestion: algorithm,
      frontEndQuestion: frontEnd,
    } = data;

    const total = (Number(algorithm) || 0) + (Number(frontEnd) || 0);
    setDataList((prev) => [
      ...prev,
      {
        name,
        algorithm,
        frontEnd,
        total,
      },
    ]);
  };

  const clearDataList = () => {
    setDataList([]);
  };

  return (
    <>
      <Form addData={addNewRow} clearData={clearDataList} />
      <Table list={dataList} />
    </>
  );
}
