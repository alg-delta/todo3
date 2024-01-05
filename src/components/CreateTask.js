import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не повинно бути порожнім");
      return;
    }
    if (task.length < 3) {
      alert("Поле повинне мати не менше 3 символів");
      return;
    }

    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Напишіть задачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit" className="btn">
        Додати
      </button>
    </form>
  );
}
