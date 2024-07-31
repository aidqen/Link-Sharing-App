import { useEffect, useState } from "react"
import { updateLink } from "../store/actions/links.actions"

export function LinkPreview({ link, idx, onUpdateLink }) {
  const [linkToEdit, setLinkToEdit] = useState(link)

  useEffect(() => {
    onUpdateLink(linkToEdit)
  }, [linkToEdit])


  

  const { platform } = linkToEdit

  console.log(linkToEdit);

  const socialMediaOptions = [
    { value: '', label: 'Select' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'linkedIn', label: 'LinkedIn' },
    { value: 'gitHub', label: 'GitHub' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'other', label: 'Other' },
  ]

  function handleUpdate({ target }) {
    const { name, value } = target
    setLinkToEdit({ ...linkToEdit, [name]: value })
  }

  return (
    <div className="bg-[#F8F8F8] p-4 rounded-md" key={link.id}>
      <div className="header flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 text-slate-500">
          <i className="fas fa-bars font-extralight"></i>
          <h3 className="font-bold">Link #{idx + 1}</h3>
        </div>
        <button className="hover:underline">Remove</button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label>Platform</label>
          <select
            value={platform}
            required
            className="border-[1px] border-slate-200 rounded-md px-3 py-3"
            onChange={handleUpdate}
            name="platform"
          >
            {socialMediaOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Link</label>
          <input
            type="text"
            name="link"
            value={linkToEdit.link}
            placeholder="https://www.example.com..."
            className="border-[1px] border-slate-200 rounded-md px-3 py-3"
            onChange={handleUpdate}
          />
        </div>
      </div>
    </div>
  )
}
