import {Container} from './components/Container';
import { Todos } from './components/Todos';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
    <div className="App">
      <Container addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
