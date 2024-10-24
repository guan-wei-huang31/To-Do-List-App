import PropTypes from "prop-types";
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div 
  className={`todo ${todo.isCompleted ? "completed" : ""}`} 
  onClick={() => toggleCompleted(todo.id)}
>
  <span>{todo.content}</span>
  <div>
    <MdEdit 
      style={{ cursor: "pointer" }} 
      onClick={(e) => { 
        e.stopPropagation();
        toggleIsEditing(todo.id); 
      }} 
    />
    <MdDelete 
      style={{ cursor: "pointer", marginLeft: "5px" }} 
      onClick={(e) => { 
        e.stopPropagation();
        deleteTodo(todo.id); 
      }} 
    />
  </div>
</div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  toggleIsEditing: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
