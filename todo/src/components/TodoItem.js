import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <span >{index + 1}.</span>
        <span
         
        >
          {todo.text}
        </span>
      </div>
      <div >
        <button
        
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
         
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
        
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
      
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
