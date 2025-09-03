import React,{useState} from "react";
import {useTodos} from '../context/TodoContext';
import type {Todo} from '../context/TodoContext';


type Props = { todo: Todo };

const TodoItem : React.FC<Props> = ({todo}) =>{
    const { toggletodo, edittodo, deletetodo } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(todo.text);
    const save = () =>{
        const trimmed = draft.trim();
        if(trimmed) edittodo(todo.id, trimmed);
        setIsEditing(false);
    }
    return(
        <div className="flex items-center gap-3 rounded-lg border p-3 bg-white">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggletodo(todo.id)}
            className="h-4 w-4"
            />
            {isEditing ? 
                <input 
                    className="flex-1 border rounded px-2 py-1"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && save() }
                    autoFocus
                /> 
                : (
                <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
                {todo.text}
                </span>
            )}
            {isEditing ? 
                <button onClick={save} className="px-3 py-1 rounded bg-green-600 text-white">
                Save
                </button>
                : (<button onClick={()=>setIsEditing(true)} className="px-3 py-1 rounded bg-blue-600 text-white">
                Edit
                </button>
            )}
            <button
                onClick={() => deletetodo(todo.id)}
                className="px-3 py-1 rounded bg-red-600 text-white">
                Delete
            </button>
        </div>
    )
};

export default TodoItem;