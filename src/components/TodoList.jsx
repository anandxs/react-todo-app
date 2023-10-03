import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<>
			<h2>Todo List</h2>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</>
	);
}

export default TodoList;
