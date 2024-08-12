import { NavLink, useNavigate } from 'react-router-dom'

export function MainHeader() {
  const navigate = useNavigate()

  function navigateToPreview() {
    navigate('/preview')
  }
  return (
    <header className="rounded-lg px-10 mb-7 h-20 flex flex-row items-center justify-between bg-white z-10">
      <div className="logo flex flex-row items-center gap-1 cursor-pointer">
        <img
          className=""
          src="/src/assets/images/logo-devlinks-small.svg"
          alt="Logo"
        />
        <h1 className="font-bold text-[1.7em]">devlinks</h1>
      </div>
      <nav className="flex flex-row gap-5 parent-nav text-[1em] ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-row items-center rounded-md px-4 py-2 font-bold gap-2 hover:text-purple-bright ${
              isActive
                ? 'text-purple-bright bg-purple-light'
                : 'text-gray-medium'
            }`
          }
        >
          <i className="fas fa-home"></i>
          <h4>Home</h4>
        </NavLink>
        <NavLink
          to="/links/edit"
          className={({ isActive }) =>
            `flex flex-row items-center rounded-md px-4 py-2 font-bold gap-2 hover:text-purple-bright ${
              isActive
                ? 'text-purple-bright bg-purple-light'
                : 'text-gray-medium'
            }`
          }
        >
          <i className="fas fa-link"></i>
          <h4>Links</h4>
        </NavLink>
        <NavLink
          to="/links/profile"
          className={({ isActive }) =>
            `flex flex-row items-center rounded-md px-4 py-2 font-bold gap-2 hover:text-purple-bright ${
              isActive
                ? 'text-purple-bright bg-purple-light'
                : 'text-gray-medium'
            }`
          }
        >
          <i className="fa-regular fa-circle-user fa-md"></i>
          <h4>Profile Details</h4>
        </NavLink>
      </nav>
      <button
        onClick={navigateToPreview}
        className="px-5 border-[1px] border-purple-bright rounded-md py-2 text-purple-bright font-semibold hover:text-white hover:bg-purple-bright duration-200"
      >
        Preview
      </button>
    </header>
  )
}
