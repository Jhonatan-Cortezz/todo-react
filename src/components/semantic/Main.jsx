import { useState } from 'react'
import { TodoItem, TodoActions } from '../todos'

const initialStateTodos = [
  { id: 1, title: 'Got to buy xbox', completed: true },
  { id: 2, title: 'Complete javascript course', completed: false },
  { id: 3, title: 'Creare viws for my own project', completed: false },
]
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
  
  
  return (
    <main className="px-6 -mt-[90px] flex flex-col space-y-4">

      <form onSubmit={handlesubmit} className='flex items-center bg-white h-12 rounded-md px-5 space-x-[14px]'>
        <span className='rounded-full border border-very-light-grayish-blue w-[22px] h-5 m-0 block'></span>
        <input type="text"
          placeholder="Create a new todo..."
          className='w-full outline-none text-very-dark-grayish-blue'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

      <section className='bg-white rounded-md divide-y divide-very-light-grayish-blue'>
        
        {
          filterTodo().map(todo => 
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
          )
        }

        <TodoActions
          todosItemLeft={todosItemLeft()}
          clearCompleted={clearCompleted}
        />
      </section>

      <nav className="bg-white mb-11 px-5 py-4 rounded-md">
        <ul className="flex flex-row justify-center space-x-4 font-bold text-dark-grayish-blue">
          <li className={`${filter == 'all' && 'text-bright-blue'}`}>
            <button onClick={() => setFilter('all')}>All</button>
          </li>
          <li className={`${filter == 'active' && 'text-bright-blue'}`}>
            <button onClick={() => setFilter('active')}>Active</button>
          </li>
          <li className={`${filter == 'completed' && 'text-bright-blue'}`}>
            <button onClick={() => setFilter('completed')}>Completed</button>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Main