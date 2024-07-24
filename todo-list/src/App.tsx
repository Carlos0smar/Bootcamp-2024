import { useState } from 'react'

import './App.css'

type ToDoType = {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [count, setCount] = useState(0);
  // const [stateTodo, setStateTodo] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, {
      id: todos.length + 1,
      text: inputText,
      completed: false
    }] )
    console.log(todos)
  }

  const completedTask = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id){
            item.completed = true;
        }
        return item;
      }
    )
  )
  }
  return (
    <>
      <input
        onChange={handleInputChange}
        type="Text"
        placeholder='todo'
      />
      <br />
      <p>{inputText}</p>
      <p>Todo List</p>
      <ol>
        {todos.map(todo=>(
          <li key={todo.id} className='card'>
            <p>{todo.text}</p>
            <input 
            type="checkbox"
            checked = {todo.completed}
            />
          </li>
        ))}
      </ol>


      <button onClick={addTodo}>
        count is {count}
      </button>
    </>
  )
}

export default App
