import React, { useState } from 'react';;
import TodoItem from '../components/TodoItem';
import  { useTodos}   from '../context/TodoContext';
import  type {Todo}   from '../context/TodoContext';

const TodoDashboard: React.FC = () => {
  const {todos, addtodo, clearCompleted} = useTodos();
  const [title, setTitle] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    addtodo (trimmed);
    setTitle("");
  };
  return (
    <div className="mx-auto max-w-2xl p-4">
      {/* Add form */}
      <form onSubmit={submit} className="mb-4 flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Add a new todo…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 rounded bg-black text-white">
          Add
        </button>
      </form>
      {/* Toolbar */}
      <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
        <span>
          Total: {todos.length} • Completed: {todos.filter((t: Todo) => t.completed).length}
        </span>
        <button
          onClick={clearCompleted}
          className="px-3 py-1 rounded cursor border bg-gray-400 hover:bg-red-400"
        >
          Clear Completed
        </button>
      </div>

      {/* List */}
      <div className="grid gap-3">
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos yet. Add one above.</p>
        ) : (
          todos.map((t: Todo) => <TodoItem key={t.id} todo={t} />)
        )
        }
      </div>
      </div>
  )
}

export default TodoDashboard;