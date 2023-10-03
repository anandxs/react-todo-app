import { useState } from "react";

function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		if (newItem === "") return;
		onSubmit(newItem);
		setNewItem("");
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="new-todo">New Item</label>
				<input
					type="text"
					id="new-todo"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<button>Add</button>
			</form>
		</>
	);
}

export default NewTodoForm;
