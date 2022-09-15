import React ,{useContext} from 'react';
import TodoContext from '../../Context/Todocontext';
import { Formik, Field, Form } from 'formik';
import validationSchema from './FormValidation/validation';


function Header() {
	const {addTodos} = useContext(TodoContext);
	const transition = () =>{
		
	} 
	
  return (
    <header className="header" >
		<h1>To-Do List</h1>
		<Formik
      		initialValues={{
        		todoText: '',
			}}

      	onSubmit={(values,bag) => {
		addTodos(values.todoText);
		transition();
	   bag.resetForm();
      }}
	  validationSchema={validationSchema}
	  >
		
		<Form id="form" >
			<Field name="todoText"  className="new-todo" placeholder="What needs to be done?" autoFocus />
		</Form>

		</Formik>
	</header>
  )
}

export default Header;