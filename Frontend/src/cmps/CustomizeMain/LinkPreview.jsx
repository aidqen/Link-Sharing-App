import { useEffect, useState } from "react"
import { updateLink } from "../../store/actions/links.actions"

export function LinkPreview({ link, handleLinksUpdate, idx, onRemoveLink }) {
  const [editedLink, setEditedLink] = useState(link)
  

  const { platform, url, _id } = editedLink


  const socialMediaOptions = [
    { value: '', label: 'Select', id: 'n101' },
    { value: 'instagram', label: 'Instagram', id: 'n102' },
    { value: 'youtube', label: 'YouTube', id: 'n103' },
    { value: 'facebook', label: 'Facebook', id: 'n104' },
    { value: 'x', label: 'X', id: 'n105' },
    { value: 'linkedIn', label: 'LinkedIn', id: 'n106' },
    { value: 'gitHub', label: 'GitHub', id: 'n107' },
    { value: 'portfolio', label: 'Portfolio', id: 'n108' },
    { value: 'other', label: 'Other', id: 'n109' },
  ]

  function handleUpdate({ target }) {
    const { name, value } = target
    setEditedLink({...editedLink, [name]: value})
    handleLinksUpdate(idx, {...editedLink, [name]: value})
  }

  return (
    <div className="bg-[#F8F8F8] p-4 rounded-md" key={link._id}>
      <div className="header flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 text-slate-500">
          <i className="fas fa-bars font-extralight"></i>
          <h3 className="font-bold">Link #{idx + 1}</h3>
        </div>
        <button className="hover:underline" onClick={(ev) => onRemoveLink(_id, ev)}>Remove</button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label>Platform</label>
          <select
            value={platform}
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent 
           invalid:border-red-500 invalid:text-red-600 rounded-md px-3 py-3 transition duration-200"
            onChange={handleUpdate}
            name="platform"
          >
            {socialMediaOptions.map(option => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Link</label>
          <input
            type="text"
            name="url"
            value={url}
            placeholder="https://www.example.com..."
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent 
           invalid:border-red-500 invalid:text-red-600 rounded-md px-3 py-3 transition duration-200"
            onChange={handleUpdate}
          />
        </div>
      </div>
    </div>
  )
}
