import { MoonIcon } from './../icons'
const Header = () => {

  return (
    <header className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover px-6 pt-12 h-[200px]">
      <div className="flex justify-between mb-9">
        <h1 className="uppercase text-white text-2xl font-normal tracking-[0.25em]">todo</h1>
        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  )
}

export default Header