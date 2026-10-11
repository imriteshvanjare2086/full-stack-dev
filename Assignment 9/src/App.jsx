
import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  function addTask(e) {
    e.preventDefault();

    if (!task.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, text: task.trim() }
            : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: task.trim(),
          completed: false,
        },
      ]);
    }

    setTask("");
  }

  function toggleTask(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));

    if (editId === id) {
      setEditId(null);
      setTask("");
    }
  }

  function editTask(todo) {
    setTask(todo.text);
    setEditId(todo.id);
  }

  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="container">
      <div className="header">
        <h1>My Todo List</h1>
        <p>Organize your day, one task at a time.</p>
      </div>

      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update" : "Add Task"}
        </button>
      </form>

      <div className="task-summary">
        <span>{todos.length} Total Tasks</span>
        <span>{remaining} Remaining</span>
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✓</div>
          <h3>No tasks yet</h3>
          <p>Add a task above to get started!</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "completed" : ""}
            >
              <label className="task-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTask(todo.id)}
                />

                <span>{todo.text}</span>
              </label>

              <div className="actions">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editTask(todo)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteTask(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="footer">
        Keep going. You're doing great!
      </div>
    </div>
  );
}
