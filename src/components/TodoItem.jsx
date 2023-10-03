function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
	return (
		<li>
			<label className="list-item">
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
