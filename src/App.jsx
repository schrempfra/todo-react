import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Sam's Birthday",
      photo: "https://picsum.photos/200/300?random=203",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      photo: "https://picsum.photos/200/300?random=2",
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: "Buy a new book",
      photo: "https://picsum.photos/200/300?random=23",
      isComplete: false,
      isEditing: false,
    }
  ]);

  const [idForTodo, setIdForTodo] = useState(4);

  function deleteTodo(id)
  {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  function addTodo(todo) 
  {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todo,
        photo: "https://picsum.photos/200/300?random=",
        isCompleted: false,
      }
    ]);

    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function completeTodo(id)
  {
    const updateTodos = todos.map(todo => {
        if(todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }

        return todo;
    })

    setTodos(updateTodos);
  }

  function markAsEditing(id)
  {
    const updateTodos = todos.map(todo => {
        if(todo.id === id) {
          todo.isEditing = true;
        }

        return todo;
    })

    setTodos(updateTodos);
  }

  function updateTodo(event, id)
  {
    const updateTodos = todos.map(todo => {
        if(todo.id === id) {
          if(event.target.value.trim().length === 0) {
            todo.isEditing = false;
            return todo;
          }
          todo.title = event.target.value;
          todo.isEditing = false;
        }

        return todo;
    })

    setTodos(updateTodos);
  }

  function cancelEdit(id)
  {
    const updateTodos = todos.map(todo => {
        if(todo.id === id) {
          todo.isEditing = false;
        }

        return todo;
    })

    setTodos(updateTodos);
  }

  return (
    <div className="bg-emerald-50 h-screen pt-40">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-10">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-5">Todo App</h2>

          <TodoForm addTodo={addTodo} />
          
          {todos.length > 0 ? (
            <TodoList 
              todos={todos}
              completeTodo={completeTodo}
              markAsEditing={markAsEditing}
              updateTodo={updateTodo}
              cancelEdit={cancelEdit}
              deleteTodo={deleteTodo}
              />
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
