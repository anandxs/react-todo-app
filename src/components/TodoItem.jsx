function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					value={completed}
					onChange={() => toggleTodo(id, completed)}
				/>
				{title}
				<button onClick={() => deleteTodo(id)}>Delete</button>
			</label>
		</li>
	);
}

export default TodoItem;
