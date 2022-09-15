import React,{useContext} from 'react';

import TodoContext from '../../Context/Todocontext';
function ContentFooter() {
	const {todos,filter,setFilter} = useContext(TodoContext);
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			Item left
		</span>

		<ul className="filters">
			<li>
				<a href="#/"
				 className={filter==="all" ? "selected" : ""}
				 onClick={() => setFilter("all")}
				 >All</a>
			</li>
			<li>
				<a href="#/"
				className={filter==="active" ? "selected" : ""}
				onClick={() => setFilter("active")}
				>Active</a>
			</li>
			<li>
				<a href="#/"
				className={filter==="completed" ? "selected" : ""}
				onClick={() => setFilter("completed")}
				>Completed</a>
			</li>
		</ul>

		
	</footer>
  )
}

export default ContentFooter;