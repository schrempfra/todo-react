import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Sam's Birthday",
      photo: "https://picsum.photos/200/300?random=203",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      photo: "https://picsum.photos/200/300?random=2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Buy a new book",
      photo: "https://picsum.photos/200/300?random=23",
      isCompleted: false,
    }
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState('');

  function deleteTodo(id)
  {
    setTodos([...todos].filter(todo => todo.id !== id));
  }


  function handleInput(event)
  {
    setTodoInput(
      event.target.value
    );
  }

  function addTodo(event) 
  {
    event.preventDefault();

    if(todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        photo: "https://picsum.photos/200/300?random=",
        isCompleted: false,
      }
    ]);

    setTodoInput('');
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  return (
    <div className="bg-emerald-50 h-screen pt-40">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-10">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-5">Todo App</h2>

          <form action="#" onSubmit={addTodo}>
            <div>
              <label for="todo" class="sr-only">What you wanna do next?</label>
              <input type="text" value={todoInput} onChange={handleInput} id="todo" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" placeholder="What you wanna do next?" />
            </div>
          </form>

          <ul className="divide-y divide-gray-100">
            {todos.map((todo, index) => (
              <li key={todo.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={ todo.photo } alt="" />
                  <div className="min-w-0 flex items-center">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{ todo.title }</p> 
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="cursor-pointer" onClick={() => deleteTodo(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
