import { NavLink, useNavigate } from 'react-router-dom'

export function MainHeader() {
  const navigate = useNavigate()

  function navigateToPreview() {
    navigate('/preview')
  }
  return (
    <>
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
          to="/edit"
          className={({ isActive }) =>
            `flex flex-row items-center rounded-md px-4 py-2 font-bold gap-2 ${
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
          to="/profile/123"
          className={({ isActive }) =>
            `flex flex-row items-center rounded-md px-4 py-2 font-bold gap-2 ${
              isActive
                ? 'text-purple-bright bg-purple-light'
                : 'text-gray-medium'
            }`
          }
        >
          <i className="fa-regular fa-circle-user fa-xs"></i>
          <h4>Profile Details</h4>
        </NavLink>
      </nav>
      <button
        onClick={navigateToPreview}
        className="px-5 border-[1px] border-purple-bright rounded-md py-2 text-purple-bright font-semibold hover:text-white hover:bg-purple-bright duration-200"
      >
        Preview
      </button>
    </>
  )
}
