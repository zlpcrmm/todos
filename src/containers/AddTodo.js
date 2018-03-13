import React from 'react'
import { connect } from 'react-redux'
import { addTodo, queryGithub } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
              return
          }
          dispatch(queryGithub(input.value))
          input.value = ''
      }}>
        <input ref={node => {
            input = node
        }} />
        <button type="submit">
          在Github上搜索并添加
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
