import { useSelector } from 'react-redux'
import { SocialMediaLabel } from './SocialMediaLabel'

export function PhonePreviewDetails() {
  const linksList = useSelector(state => state.linksList)
  const profileDetails = useSelector(state => state.personalDetails)
  const { email, firstName, lastName } = profileDetails

  return (
    <div className="flex flex-col justify-start items-center bg-white py-5 px-6 h-full w-full overflow-y-auto custom-scrollbar">
      <img
        src="src/assets/images/hi.jpg"
        className="mb-6 rounded-[50%] border-4 border-purple-bright w-[8em] h-[8em] object-cover"
        alt=""
      />
      {firstName && lastName && (
        <h3 className="mb-2 font-semibold text-lg">
          {firstName} {lastName}
        </h3>
      )}
      {email && <h4 className="text-sm text-slate-500 mb-10">{email}</h4>}
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
      <div className="w-full h-full">
        {linksList &&
          linksList.map(link => {
            return <SocialMediaLabel {...link} key={link._id} />
          })}
      </div>
    </div>
  )
}
