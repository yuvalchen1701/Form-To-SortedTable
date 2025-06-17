import Input from "./Input";
import Button from "./Button";
import "./Form.css";
import { useRef } from "react";

export default function Form({ addData, clearData }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    formRef.current.reset();
    addData(data);
  };

  const handleClear = () => {
    clearData();
  };

  return (
    <div className="form-container">
      <form ref={formRef} className="custom-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <Input id="candidateName">Candidate Name:</Input>
          <Input type="number" id="algorithmQuestion">
            Algorithm question:
          </Input>
          <Input type="number" id="frontEndQuestion">
            Front-end question:
          </Input>
        </div>

        <div className="btn-row">
          <Button type="submit">Confirm</Button>
          <Button type="button" onClick={handleClear}>
            Clear All
          </Button>
        </div>
      </form>
    </div>
  );
}
