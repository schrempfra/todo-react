import React from 'react'
import PropTypes from 'prop-types'

TodoClearCompleted.propTypes = {
    clearCompleted: PropTypes.func.isRequired,
};

export default function TodoClearCompleted(props) {
  return (
    <button className="px-4 py-2 font-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm" 
            onClick={props.clearCompleted}
        >
        Clear Completed
    </button>
  )
}
