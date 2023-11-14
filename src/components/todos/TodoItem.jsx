/* eslint-disable react/display-name */
import React from 'react'
import { CrossIcon, CheckIcon } from './../icons'

const TodoItem = React.forwardRef(({todo, updateTodo, removeTodo, ...props}, ref) => {
  return (
    <article {...props} ref={ref} className="group flex cursor-pointer flex-row justify-start items-center h-12 space-x-4 text-very-dark-grayish-blue px-5 lg:h-16 lg:px-8">
      <button
        className="w-5 h-5 lg:h-6 lg:w-6 bg-very-light-grayish-blue dark:bg-very-dark-grayish-blue-2 p-[1px] rounded-full overflow-hidden hover:bg-gradient-to-br from-custom-sky to-custom-purple"
        onClick={() => updateTodo(todo.id) }
      >
        <span className={`w-full h-full rounded-full flex items-center justify-center
          ${todo.completed ? 'bg-gradient-to-br from-custom-sky to-custom-purple' : 'bg-white dark:bg-very-dark-desaturated-blue'}
        `}>
          {
            todo.completed && <CheckIcon />
          }
        </span>
      </button>
      <span className={`flex-grow ${todo.completed ? 'line-through' : 'dark:text-d-light-grayish-blue' }`}>{ todo.title }</span>
      <button
        className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        onClick={() => removeTodo(todo.id) }
      >
        <CrossIcon />
      </button>
    </article>
  )
})

export default TodoItem