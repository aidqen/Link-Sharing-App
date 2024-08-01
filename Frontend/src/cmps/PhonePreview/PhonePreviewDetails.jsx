import { useSelector } from 'react-redux'
import { SocialMediaLabel } from './SocialMediaLabel'

export function PhonePreviewDetails() {
  const linksList = useSelector(state => state.linksList)
  console.log('linksList:', linksList)

  return (
    <div className="flex flex-col justify-start items-center bg-white py-5 px-6 h-full w-full overflow-y-auto custom-scrollbar">
      <img
        src="src/assets/images/hi.jpg"
        className="mb-6 rounded-[50%] border-4 border-purple-bright w-[8em] h-[8em] object-cover"
        alt=""
      />
      <h3 className="mb-2 font-semibold text-lg">Ben Wright</h3>
      <h4 className="text-sm text-slate-500 mb-20">ben@example.com</h4>
      <div className='w-full h-full'>
        {linksList &&
          linksList.map(link => {
            return <SocialMediaLabel {...link} key={link._id} />
          })}
      </div>
    </div>
  )
}
