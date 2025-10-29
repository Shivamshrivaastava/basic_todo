import { useState } from "react";
function TodoApp() {
  const [todoName, setTodoName] = useState([]);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoName.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      name: todoName,
      status: "pending",
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
  };
  const changeStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          let newStatus =
            todo.status === "pending"
              ? "in Progress"
              : todo.status === "in Progress"
              ? "Done"
              : "pending";
          return { ...todo, status: newStatus };
        }
        return todo;
      })
    );
  };
  return (
    <>
      <h2>todo app</h2>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="enter todo name..."
      />

      <button onClick={addTodo}>addTodo</button>
      <table>
        <tr>
          <th>todo Name</th>
          <th>status</th>
          <th>Action</th>
        </tr>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.status}</td>
              <button onClick={() => changeStatus(todo.id)}>
                changeStatus
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoApp;
