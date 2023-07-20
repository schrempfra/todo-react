import React from 'react'
import PropTypes from 'prop-types'

TodoItemsRemaining.propTypes = {
    remaining: PropTypes.func.isRequired,
}

export default function TodoItemsRemaining(props) {
  return (
        <div>{props.remaining()} items remaining</div>
  )
}
