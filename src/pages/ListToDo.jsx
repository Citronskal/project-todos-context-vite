import { useToDos } from "../ToDoContext";

export const ListToDo = () => {
  const { todos, toggleToDo } = useToDos();

  return (
    <div>
      <h1>All</h1>
      <p>
        {todos.length} {todos.length === 1 ? "task" : "tasks"}
      </p>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleToDo(index);
              }}
            />
            <label
              className={`${todo.completed} ? "text-gray-400 line-through" : "text-black"`}
            >
              {todo.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
