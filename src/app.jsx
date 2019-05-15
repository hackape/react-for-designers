import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

const initialTodoList = [
  {
    id: 1,
    title: 'buy pen',
    completed: true
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
  const [todoList, setTodoList] = useState(initialTodoList)
  return (
    <>
      <TodoHeader />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
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

function TodoList ({ todoList, setTodoList }) {
  const updateTodo = (todoId, todoPartial) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          ...todoPartial
        }
      } else {
        return todo
      }
    })

    setTodoList(updatedTodoList)
  }

  return (
    <section className='main'>
      <input id='toggle-all' className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {todoList.map(todo => <TodoItem key={todo.id} todo={todo} update={(todoPartial) => updateTodo(todo.id, todoPartial)} />)}
      </ul>
    </section>
  )
}

function TodoItem ({ todo, update }) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <li className={
      cx('todo', {
        completed: todo.completed,
        editing: isEditing
      })
    }>
      <div className='view'>
        <input type='checkbox' className='toggle' checked={todo.completed} onChange={e => update({ completed: e.target.checked })} />
        <label onDoubleClick={() => setIsEditing(true)}>{todo.title}</label>
        <button className='destroy' />
      </div>
      <input
        className='edit'
        type='text'
        value={todo.title}
        onChange={e => update({ title: e.target.value })}
        onBlur={() => setIsEditing(false)}
        onKeyUp={e => { if (e.keyCode === 13) setIsEditing(false) }}
      />
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
