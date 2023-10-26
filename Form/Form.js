import { useState } from "react";
import "../QuestionStyle/Form.css";

export default function Form() {
  const [formData, setFormData] = useState({});
  const getValue = (value, name) => {
    let data = { [name]: value };
    setFormData({ formData, ...data });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return ( 
    <form onSubmit={submit}>
      <div className="Form">
        <input
          placeholder="Enter your name"
          type={"text"}
          name="name"
          onChange={(e) => getValue(e.target.value, e.target.name)}
        />
        <input
          palceholder="Enter Age"
          type={"number"}
          name="age"
          onChange={(e) => getValue(e.target.value, e.target.name)}
        />
        <input
          type={"date"}
          name="DOB"
          onChange={(e) => getValue(e.target.value, e.target.name)}
        />
        <input type={"submit"} />
      </div>
    </form>
  );
}
