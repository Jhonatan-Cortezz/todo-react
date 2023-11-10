const TodoActions = ({todosItemLeft, clearCompleted}) => {
  return (
    <section className="flex flex-row justify-between px-5 py-4 text-dark-grayish-blue">
      <span>{todosItemLeft} items left</span>
      <button onClick={clearCompleted}>
        Clear completed
      </button>
    </section>
  )
}

export default TodoActions