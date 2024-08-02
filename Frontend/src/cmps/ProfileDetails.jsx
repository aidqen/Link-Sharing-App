import { CiImageOn } from 'react-icons/ci'
import { useParams } from 'react-router-dom'

export function ProfileDetails() {
  const params = useParams()
  return (
    <div className="px-10 pt-11 flex flex-col bg-white rounded-md w-full h-full items-start">
      <h1 className="font-bold text-3xl mb-4">Profile Details</h1>
      <h4 className="font-extralight text-slate-400 mb-8">
        Add your details to create a personal touch to your profile
      </h4>
      <div className="flex flex-row items-center justify-between bg-background-mainBg text-slate-500 w-full h-[11em] p-4 mb-8 rounded-xl">
        <h4>Profile Picture</h4>
        <div className="flex flex-col bg-purple-light text-purple-bright justify-center items-center p-4 rounded-xl h-full font-bold gap-4 cursor-pointer hover:text-slate-700 hover:bg-purple-200 duration-200">
          <i className="fa-regular fa-image fa-xl"></i>
          <h4>+ Upload Image</h4>
        </div>
        <div className="flex flex-col">
          <h5>Image must be below 1024x1024px</h5>
          <h5>Use PNG or JPG format</h5>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-background-mainBg text-slate-500 p-6 rounded-xl mb-9 w-full">
        <div className="flex flex-row justify-between">
          <label>First name*</label>
          <input
            type="text"
            name="firstName"
            className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
            placeholder="e.g John"
          />
        </div>
        <div className="flex flex-row justify-between">
          <label>Last name*</label>
          <input
            type="text"
            name="lastName"
            className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
            placeholder="e.g Appleseed"
          />
        </div>
        <div className="flex flex-row justify-between">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
            placeholder="e.g email@exmaple.com"
          />
        </div>
      </div>
      <hr className='h-[3px] w-full mb-4'/>
      <button className='main-btn'>Save</button>
    </div>
  )
}
