import { useEffect, useState } from 'react'
import { TodoItem, TodoActions, TodoFilter } from '../todos'

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const Main = () => {
  const [ todos, setTodos ] = useState(initialStateTodos)
  const [ title, setTitle ] = useState('')
  const [ filter, setFilter ] = useState('all')

  const createTodo = (title) => {
    const newTodo = {
      id: new Date().getTime(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos( todos.filter((todo) => todo.id != id) )
  }
  
  const updateTodo = (id) => {
    setTodos( todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo ) )
  }

  const todosItemLeft = () => todos.filter(todo => !todo.completed).length
  
  const clearCompleted = () => {
    setTodos( todos.filter(todo => !todo.completed) )
  }

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos
      case "active":
        return todos.filter(todo => !todo.completed)
      case "completed":
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  } 

  const handlesubmit = (e) => {
    e.preventDefault()

    if (!title.trim().length) return setTitle('')
    
    createTodo(title)
    setTitle('')
  }
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return (
    <main className="px-6 -mt-[90px] flex flex-col space-y-4 lg:max-w-[580px] lg:mx-auto lg:-mt-36 lg:space-y-6">

      <form onSubmit={handlesubmit} className='flex items-center bg-white dark:bg-very-dark-desaturated-blue h-12 rounded-md px-5 space-x-[14px] lg:h-16 lg:px-8'>
        <span className='rounded-full border border-very-light-grayish-blue w-[22px] h-5 m-0 block lg:h-6 lg:w-[26px] dark:border-very-dark-grayish-blue-2'></span>
        <input type="text"
          placeholder="Create a new todo..."
          className='w-full outline-none text-very-dark-grayish-blue dark:bg-very-dark-desaturated-blue dark:placeholder:text-very-dark-grayish-blue-1 dark:text-d-light-grayish-blue caret-bright-blue'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

      <section className='bg-white dark:bg-very-dark-desaturated-blue rounded-md divide-y divide-very-light-grayish-blue dark:divide-very-dark-grayish-blue-2'>
        
        {
          filterTodo().map(todo => 
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
          )
        }

        <TodoActions
          todosItemLeft={todosItemLeft()}
          clearCompleted={clearCompleted}
          filter={filter}
          setFilter={setFilter}
        />
      </section>

      <TodoFilter filter={filter} setFilter={setFilter} className='lg:hidden'/>
    </main>
  )
}

export default Main