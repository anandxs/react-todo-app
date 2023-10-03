import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState("");

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	});

	function handleSubmit(event) {
		event.preventDefault();
		if (newItem === "") return;
		onSubmit(newItem);
		setNewItem("");
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="new-todo">Add New Item</label>
				<input
					ref={inputRef}
					type="text"
					id="new-todo"
					placeholder="Enter your task here"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<button>Add</button>
			</form>
		</>
	);
}

export default NewTodoForm;
