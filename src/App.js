
import './index.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import {TodoProvider} from "./Context/Todocontext"

function App() {
  return (
    <TodoProvider>
      <section className="todoapp" >
        <Header/>
        <Content />
     
      </section>
    </TodoProvider>
  );
}

export default App;
