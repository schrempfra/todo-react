import React from 'react'
import PropTypes from 'prop-types'

TodoCompleteAll.propTypes = {
    completeAllTodos: PropTypes.func.isRequired,
};

export default function TodoCompleteAll(props) {
  return (
    <div>
        <button className="px-4 py-2 font-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm" 
            onClick={props.completeAllTodos}
        >
            Check all
        </button>
    </div>
  )
}
