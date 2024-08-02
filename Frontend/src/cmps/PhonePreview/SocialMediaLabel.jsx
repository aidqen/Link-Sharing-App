import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

export function SocialMediaLabel({ platform, url }) {
  var options = { classes: 'bg-gray-500', text: '', icon: '' }

  switch (platform) {
    case 'gitHub':
      options = { classes: 'bg-black', text: 'GitHub', icon: FaGithub }
      break
    case 'youtube':
      options = { classes: 'bg-red-600', text: 'YouTube', icon: FaYoutube }
      break
    case 'linkedIn':
      options = { classes: 'bg-blue-600', text: 'LinkedIn', icon: FaLinkedin }
      break
    case 'facebook':
      options = { classes: 'bg-blue-600', text: 'Facebook', icon: FaFacebook }
      break
    case 'x':
      options = { classes: 'bg-[#0F1419]', text: '', icon: FaXTwitter }
      break
    case 'instagram':
      options = { classes: 'bg-gradient-to-l from-yellow-500 via-red-500 to-purple-500', text: 'Instagram', icon: FaInstagram }
      break
  }
  const { icon: Icon } = options

  return (
    <div
      className={`flex flex-row justify-between items-center rounded-lg h-[3em] px-4 py-2
     text-slate-50 w-full mb-4 cursor-pointer shadow-lg ${options.classes} `}
    >
      <div className="text flex flex-row gap-5 items-center">
        {Icon && <Icon />}
        <h3 className="capitalize text-sm">{options.text && options.text}</h3>
      </div>
      <i className="fa-solid fa-arrow-right  text-lg"></i>
    </div>
  )
}
