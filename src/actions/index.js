let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const queryGithub = (username) =>({
    type: 'QUERY_ACTION',
    username
})

export const queryGithubDone = (text) =>({
    type: 'QUERY_ACTION_DONE',
    id: nextTodoId++,
    text
})

export const queryGithubError = (err) =>({
    type: 'QUERY_ACTION_ERROR',
    err
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  QUERY_ACTION: 'QUERY_ACTION',
  QUERY_ACTION_DONE: 'QUERY_ACTION_DONE',
  QUERY_ACTION_ERROR: 'QUERY_ACTION_ERROR'
}
