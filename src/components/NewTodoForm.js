import React, { useState } from "react";

function NewTodoForm(props) {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    if (description.length !== "" && assignedTo !== "") {
      props.handleAddTodo(description, assignedTo);
      setDescription("");
      setAssignedTo("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => setAssignedTo(event.target.value)}
            value={assignedTo}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            className="form-control"
            rows={3}
            required
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="buttton"
          className="btn btn-primary mt-3"
          onClick={submitForm}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
