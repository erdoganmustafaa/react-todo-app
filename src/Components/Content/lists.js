import React, {useContext}from 'react';
import TodoContext from '../../Context/Todocontext';

let filtered = null;
function Lists() {
    const {todos,toDoOnChange,toDoOnDestroy,filter:todoFilter} = useContext(TodoContext);

    filtered = todos;
    
    if(todoFilter !== "all"){
        filtered = todos.filter((todo) =>
        todoFilter==="active"
        ? todo.completed === false : todo.completed === true
        )}
    const onChange = (id) =>{
        toDoOnChange(id);
    }
    const onDestroy = (id)=>{
        toDoOnDestroy(id);
    }
  return (
    <ul className="todo-list" >
        {
            
            filtered.map((todo)=>(
                <li  key={todo.id} className={todo.completed ? "completed" : ""} >
				<div className="view" >
					<input className="toggle"
                     type="checkbox"
                    checked={todo.completed}
                    onChange={()=>onChange(todo.id)} />
					<label>{todo.text}</label>
					<button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
				</div>
			</li>
            ))
        }
			
			
		</ul>
  )
}

export default Lists;