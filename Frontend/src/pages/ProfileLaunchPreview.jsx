import { useSelector } from 'react-redux'
import { SocialMediaLabel } from '../cmps/PhonePreview/SocialMediaLabel'

export function ProfileLaunchPreview() {
  const linksList = useSelector(state => state.linksList)
  const profileDetails = useSelector(state => state.personalDetails)
  const { email, firstName, lastName, img } = profileDetails

  return (
    <main className="fixed h-screen w-screen top-0 left-0 pt-56 bg-white z-0">
      <div className="absolute z-0 top-0 left-0 w-screen h-[40%] bg-purple-bright rounded-b-[2em]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center bg-white pt-14 px-10 h-[40em] w-[25em] overflow-y-auto custom-scrollbar z-10 rounded-3xl shadow-2xl">
        <img
          src={img}
          className="mb-6 rounded-[50%] border-4 border-purple-bright w-[8em] h-[8em] object-cover"
        />
      {firstName && lastName && (
        <h3 className="mb-2 font-semibold text-lg">
          {firstName} {lastName}
        </h3>
      )}
      {(!firstName || !lastName || !email) && (
        <div
          role="status"
          className=" flex flex-col items-center max-w-sm animate-pulse"
        >
          {(!firstName || !lastName) && (
            <div className="h-4 bg-gray-100 rounded-full dark:bg-gray-300 w-24 mb-2"></div>
          )}
          {!email && (
            <div className="h-4 bg-gray-100 rounded-full dark:bg-gray-300 w-36 mb-10"></div>
          )}
        </div>
      )}
      {email && <h4 className="text-sm text-slate-500 mb-10">{email}</h4>}
        <div className="w-full h-full">
          {linksList &&
            linksList.map(link => {
              return <SocialMediaLabel {...link} key={link._id} />
            })}
        </div>
      </div>
    </main>
  )
}
