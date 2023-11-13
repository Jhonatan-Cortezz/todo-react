import { CrossIcon, CheckIcon } from './../icons'

const TodoItem = ({todo, updateTodo, removeTodo}) => {
  return (
    <article className="flex flex-row justify-start space-x-4 text-very-dark-grayish-blue py-4 px-5">
      <button
        className={`rounded-full border border-very-light-grayish-blue dark:border-very-dark-grayish-blue-2 w-5 h-5 m-auto grid place-items-center
                  ${todo.completed && 'bg-gradient-to-br from-[hsl(192_100%_67%)] to-[hsl(280_87%_65%)]'}
        `}
        onClick={() => updateTodo(todo.id) }
      >
        {
          todo.completed && <CheckIcon />
        }
      </button>
      <span className={`flex-grow ${todo.completed ? 'line-through' : 'dark:text-d-light-grayish-blue' }`}>{ todo.title }</span>
      <button
        className='w-4 h-4'
        onClick={() => removeTodo(todo.id) }
      >
        <CrossIcon />
      </button>
    </article>
  )
}

export default TodoItem