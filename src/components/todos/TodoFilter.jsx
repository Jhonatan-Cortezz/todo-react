const TodoFilter = ({filter, setFilter, ...props}) => {
  return (
    <nav className={`bg-white mb-11 px-5 py-4 rounded-md dark:bg-very-dark-desaturated-blue lg:mb-0 lg:p-0 ${props.className}`}>
      <ul className="flex flex-row justify-center space-x-4 font-bold text-dark-grayish-blue dark:text-very-dark-grayish-blue-1">
        <li className={`${filter == 'all' && 'text-bright-blue'} hover:text-bright-blue`}>
          <button onClick={() => setFilter('all')}>All</button>
        </li>
        <li className={`${filter == 'active' && 'text-bright-blue'} hover:text-bright-blue`}>
          <button onClick={() => setFilter('active')}>Active</button>
        </li>
        <li className={`${filter == 'completed' && 'text-bright-blue'} hover:text-bright-blue`}>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </li>
      </ul>
    </nav>
  )
}

export default TodoFilter
