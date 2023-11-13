import { TodoFilter } from './'
const TodoActions = ({todosItemLeft, clearCompleted, filter, setFilter}) => {
  return (
    <section className="flex flex-row justify-between px-5 py-4 text-dark-grayish-blue dark:text-very-dark-grayish-blue-1 lg:px-8">
      <span>{todosItemLeft} items left</span>

      <TodoFilter filter={filter} setFilter={setFilter} className='hidden lg:block'/>

      <button onClick={clearCompleted} className='hover:text-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue'>
        Clear completed
      </button>
    </section>
  )
}

export default TodoActions