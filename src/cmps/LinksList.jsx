export function LinksList({ linksList }) {
  if (!linksList) return
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

  return (
    <form className=" flex flex-col gap-4 h-[30em] overflow-y-auto custom-scrollbar">
      {linksList.map((link, idx) => {
        return (
          <div className="bg-[#F8F8F8] p-4 rounded-md" key={link.link}>
            <div className="header flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2 text-slate-500">
                <i className="fas fa-bars font-extralight"></i>
                <h3 className="font-bold">Link #{idx + 1}</h3>
              </div>
              <button>Remove</button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label>Platform</label>
                <select
                  value={link.platform}
                  required
                  className="border-[1px] border-slate-200 rounded-md px-3 py-3"
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
                  value={link.link}
                  placeholder="https://www.example.com..."
                  className="border-[1px] border-slate-200 rounded-md px-3 py-3"
                />
              </div>
            </div>
          </div>
        )
      })}
      <button className="px-5 border-[1px] border-purple-bright rounded-md py-2 text-white font-semibold bg-purple-bright hover:bg-white hover:text-purple-bright duration-200 w-[6em] my-3">
        Save
      </button>
    </form>
  )
}
