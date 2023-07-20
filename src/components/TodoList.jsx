import React from 'react'
import PropTypes from 'prop-types'

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default function TodoList(props) {

    return (
        <ul className="divide-y divide-gray-100">
            {props.todos.map((todo, index) => (
                <li key={todo.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4 items-center">
                        <input checked={todo.isComplete ? true : false} type="checkbox" onChange={() => props.completeTodo(todo.id)} className="rounded" />
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={ todo.photo } alt="" />
                        <div>
                        { !todo.isEditing ? 
                        <p onDoubleClick={() => props.markAsEditing(todo.id)}
                            className={`text-sm font-semibold leading-6 text-gray-900 ${todo.isComplete ?
                            'line-through' : ''}`}>
                            { todo.title }
                        </p>
                        : 
                            <input type="text" onBlur={(event) => props.updateTodo(event, todo.id)}
                            onKeyDown={event => {
                            if(event.key === 'Enter') {
                                props.updateTodo(event, todo.id);
                            } else if(event.key === 'Escape') {
                                props.cancelEdit(todo.id);
                            }
                            }}
                            defaultValue={todo.title} autoFocus className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
                        }
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="cursor-pointer" onClick={() => props.deleteTodo(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
