import { CrossIcon } from './../icons'

const TodoItem = ({text}) => {
  return (
    <article className="flex flex-row justify-start space-x-4 text-very-dark-grayish-blue py-4 px-5">
      <button className="rounded-full border border-very-light-grayish-blue w-5 h-5 m-0 block"></button>
      <span className='flex-grow'>{ text }</span>
      <button className='w-4 h-4'>
        <CrossIcon />
      </button>
    </article>
  )
}

export default TodoItem