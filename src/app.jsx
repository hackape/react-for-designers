import React from 'react'
import ReactDOM from 'react-dom'

const todoList = [
  {
    id: 1,
    title: 'buy pen',
    completed: false
  },
  {
    id: 2,
    title: 'buy apple',
    completed: false
  },
  {
    id: 3,
    title: 'buy pineapple',
    completed: false
  }
]

function TodoApp () {
  return (
    <>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </>
  )
}

function TodoHeader () {
  return (
    <header className='header'>
      <h1>todos</h1>
      <input className='new-todo' autoFocus autoComplete='off' placeholder='What needs to be done?' />
    </header>
  )
}

function TodoList () {
  return (
    <section className='main'>
      <input id='toggle-all' className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </section>
  )
}

function TodoItem ({ todo }) {
  return (
    <li className='todo'>
      <div className='view'>
        <input type='checkbox' className='toggle' />
        <label>{todo.title}</label>
        <button className='destroy' />
      </div>
      <input className='edit' type='text' />
    </li>
  )
}

function TodoFooter () {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>n items left</strong>
      </span>
      <ul className='filters'>
        <li><a href='#/all'>All</a></li>
        <li><a href='#/active'>Active</a></li>
        <li><a href='#/completed'>Completed</a></li>
      </ul>
      <button className='clear-completed'>
        Clear completed
      </button>
    </footer>
  )
}

// ========================================

ReactDOM.render(<TodoApp />, document.getElementById('root'))
