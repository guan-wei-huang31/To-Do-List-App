import { useState } from "react";
import PropTypes from "prop-types";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

CreateForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default CreateForm;
