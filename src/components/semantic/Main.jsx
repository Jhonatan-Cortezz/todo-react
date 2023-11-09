import { TodoItem, TodoActions } from '../todos'
const Main = () => {
  return (
    <main className="px-6 -mt-[90px] flex flex-col space-y-4">

      <form action="" className='flex items-center bg-white h-12 rounded-md px-5 space-x-[14px]'>
        <span className='rounded-full border border-very-light-grayish-blue w-[22px] h-5 m-0 block'></span>
        <input type="text" placeholder="Create a new todo..." className='w-full outline-none text-very-dark-grayish-blue'/>
      </form>

      <section className='bg-white rounded-md divide-y divide-very-light-grayish-blue'>
        
        <TodoItem text="Holaaa"/>
        <TodoItem text="Holaaa asafds dedwsd"/>
        <TodoItem text="Holaaa"/>
        <TodoItem text="Holaaa ñlklnrf o"/>
        <TodoItem text="Holal, opokók"/>
        <TodoItem text="Holaaa"/>
        <TodoItem text="Holaaa ñlklnrf o"/>
        <TodoItem text="Holal, opokók"/>
        <TodoActions />
      </section>

      <nav className="bg-white mb-11 px-5 py-4 rounded-md">
        <ul className="flex flex-row justify-center space-x-4">
          <li><button>All</button></li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
    </main>
  )
}

export default Main