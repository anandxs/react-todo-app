import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<div className="todoList">
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
		</div>
	);
}

export default TodoList;
