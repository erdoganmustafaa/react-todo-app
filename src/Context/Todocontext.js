
import React ,{createContext,useState} from 'react'
import {v4 as uuidv4} from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [filter,setFilter] = useState("all");
    const [todos,setTodos]= useState([
    {
        id:1,
        text:"Test Todo Task",
        completed:false
    },
    {
        id:2,
        text:"Check your mails",
        completed:false
    }
    ]);
    const addTodos = (text) =>{
        setTodos([...todos,{id:uuidv4(),completed:false,text}])
    }
    const toDoOnChange = (id) =>{
        const cloneTodos = [...todos];
        const itemIndex = cloneTodos.findIndex((todo)=> todo.id === id);
        const item = cloneTodos[itemIndex];
        item.completed = !item.completed;
        setTodos(cloneTodos);
    }
    const toDoOnDestroy = (id) =>{
        const clonedTodos = [...todos];
        const itemIndex = clonedTodos.findIndex((todo)=>todo.id === id);
        clonedTodos.splice(itemIndex,1);
        setTodos(clonedTodos);
    }
    const values = {
        todos,setTodos,addTodos,toDoOnChange,toDoOnDestroy,filter,setFilter
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export default TodoContext;