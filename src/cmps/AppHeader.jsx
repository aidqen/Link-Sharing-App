import { NavLink } from 'react-router-dom'

export function AppHeader(params) {
  return (
    <header className=" rounded-lg px-10 m-7 h-20 w-[calc(100%-1.75em*2)] flex flex-row items-center justify-between bg-white">
      <div className="logo flex flex-row items-center  gap-1">
        <img
          className=""
          src="/src/assets/images/logo-devlinks-small.svg"
          alt="Logo"
        />
        <h1 className="font-bold text-[1.7em]">devlinks</h1>
      </div>
      <nav className="flex flex-row">
        <NavLink to="/" className={({isActive}) => `flex flex-row items-center ${isActive ? 'text-purple-bright' : ''}`}>
          <i class="fas fa-link"></i>
          <h4>Links</h4>
        </NavLink>
        <NavLink to="/profile/123" className="flex flex-row items-center">
          <i className="fa-regular fa-circle-user fa-xs"></i>
          <h4>Profile Details</h4>
        </NavLink>
      </nav>
    </header>
  )
}
