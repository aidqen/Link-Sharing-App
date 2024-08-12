import { SocialMediaLabel } from "./SocialMediaLabel"

export function HomepagePhoneDetails() {
  const profileToShow = {
    firstName: 'Ben',
    lastName: 'Wright',
    img: 'src/assets/images/hi.jpg',
    email: 'benwright@gmail.com',
    linksList: [
      { _id: 'n199', platform: 'gitHub'},
      { _id: '0T4KC', platform: 'youtube'},
      { _id: 'qPwVI', platform: 'linkedIn'},
    ],
  }

  const { firstName, lastName, img, email, linksList } = profileToShow

  return (
    <div className="flex flex-col justify-start items-center bg-white py-5 px-6 h-full w-full overflow-y-auto custom-scrollbar">
      <img
        src={img}
        className="mb-6 rounded-[50%] border-4 border-purple-bright min-w-[8em] min-h-[8em] max-w-[8em] max-h-[8em] object-cover"
        alt="Picked image by user"
      />

      <h3 className="mb-2 font-semibold text-lg">
        {firstName} {lastName}
      </h3>

      <h4 className="text-sm text-slate-500 mb-10">{email}</h4>
      <div className="w-full h-full">
        {linksList &&
          linksList.map(link => {
            return <SocialMediaLabel {...link} key={link._id} />
          })}
      </div>
    </div>
  )
}
