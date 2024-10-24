import { useState } from "react";
import PropTypes from "prop-types";

function EditForm({ todo, editTodo }) {
  const [content, setContent] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, content);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Done</button>
    </form>
  );
}

EditForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default EditForm;
