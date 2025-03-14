import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext"; // Import Context

const TodoCard = ({ todo, todoIndex }) => {
  const { handleCompleteTodo, handleDeleteTodo, handleEditTodo } = useContext(TodoContext);
  
  // Track edit mode and input value
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.input);  

  return (
    <div className="card">
      {isEditing ? (
        // Show input field when editing
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
        />
      ) : (
        // Show normal text when not editing
        <p>{todo.input}</p>
      )}

      <div className="todo-buttons">
        {isEditing ? (
          <>
            <button onClick={() => { 
              handleEditTodo(todoIndex, editedText);
              setIsEditing(false); // Exit edit mode
            }}>
              <h6>Save</h6>
            </button>
            <button onClick={() => {
              setEditedText(todo.input); // Reset text
              setIsEditing(false); // Exit edit mode
            }}>
              <h6>Cancel</h6>
            </button>
          </>
        ) : (
          <>
            <button disabled={todo.complete} onClick={() => handleCompleteTodo(todoIndex)}>
              <h6>Done</h6>
            </button>
            <button onClick={() => setIsEditing(true)}>
              <h6>Edit</h6>
            </button>
            <button onClick={() => handleDeleteTodo(todoIndex)}>
              <h6>Delete</h6>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
