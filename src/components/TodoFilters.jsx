import React from 'react'
import PropTypes from 'prop-types'

TodoFilters.propTypes = {
    todosFiltered: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default function TodoFilters(props) {
  return (
    <div className="space-x-3">
        <button className="px-4 py-2 font-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm" 
            onClick={() => {
                props.setFilter('all');
                props.todosFiltered('all');
            }}
        >
            All
        </button>
        <button className="px-4 py-2 font-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm" 
            onClick={() => {
                props.setFilter('active');
                props.todosFiltered('active');
            }}
        >
            Active
        </button>
        <button  onClick={() => {
                    props.setFilter('completed');
                    props.todosFiltered('completed');
                }}
            className="px-4 py-2 font-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm" 
        >
            Completed
        </button>
    </div>
  )
}
