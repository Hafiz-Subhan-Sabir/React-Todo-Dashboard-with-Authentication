import React,{createContext, useState, useEffect, useContext} from "react";

export type Todo = {
    id : number;
    text : string;
    completed: boolean;
}

type Todostype= {
    todos : Todo [];
    addtodo : (text: string) => void;
    deletetodo : (id: number) => void;
    toggletodo : (id: number) => void;
    edittodo : (id: number , newtext: string) => void;
    clearCompleted : () => void;
}

const Todocontext = createContext<Todostype | null>(null); 

const TodoContextPro: React.FC<{children: React.ReactNode}> = ({children})=>{
    const [todos, setTodos] = useState<Todo[]>([]);
    const addtodo = (text: string)=>{
        const newtodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newtodo])
    }

    const deletetodo = (id: number)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggletodo = (id: number)=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo));
    };

    const edittodo = (id: number, newtext: string) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, text: newtext} : todo ))
    }
    
    const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
    };
    useEffect(()=>{
        const savedTodos = localStorage.getItem("todos");
        if(savedTodos)
            setTodos(JSON.parse(savedTodos))
    },[])
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
    return(
        <>
        <Todocontext.Provider value={{todos, addtodo, edittodo, deletetodo, toggletodo, clearCompleted}}>
            {children}
        </Todocontext.Provider>
        </>
    )
};

export default TodoContextPro;

export const useTodos = () =>{
    const ctx = useContext(Todocontext);
    if(!ctx) throw new Error("usetodos must used inside TodoProvider");
    return ctx;
}