import React, { useState } from 'react'
import PropTypes from 'prop-types'

TodoForm.propTypes = {
    addTodo: PropTypes.func,
}

export default function TodoForm(props) {

const [todoInput, setTodoInput] = useState('');

    function handleInput(event)
    {
        setTodoInput(
            event.target.value
        );
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        if(todoInput.trim().length === 0) {
        return;
        }

        props.addTodo(todoInput);

        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
                <label for="todo" class="sr-only">What you wanna do next?</label>
                <input type="text" value={todoInput} onChange={handleInput} id="todo" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" placeholder="What you wanna do next?" />
            </div>
        </form>
    )
}