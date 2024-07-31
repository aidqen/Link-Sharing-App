import { useState } from "react";
import { LinksList } from "./LinksList";

export function CustomizeMain() {
    const [linksList, setLinksList] = useState(
        [{ platform: 'Instagram', link: 'https://www.instagram.com' }, { platform: 'Facebook', link: 'https://www.facebook.com' }, { platform: 'Twitter', link: 'https://www.twitter.com' },]
    );
    
    function onAddLink() {
        setLinksList(links => [{ platform: '', link: '' }, ...links])
    }

  return (
    <div className="customize-container px-10 pt-11 flex flex-col bg-white rounded-md w-full ">
      <div className="flex flex-col gap-[2em] mb-5">
        <header className="flex flex-col gap-[0.5em]">
          <h2 className="text-4xl font-bold text-[#373737]">Customize your links</h2>
          <p className="text-[#757575] text-sm">
            Add / Edit / Remove links below and then share all your profiles
            with the world!
          </p>
        </header>
        <button className="flex items-center justify-center rounded-md border-[1px] border-purple-bright text-purple-bright w-full h-7 py-5 hover:text-white hover:bg-purple-bright duration-200 font-bold" onClick={onAddLink}>+ Add new link</button>
      </div>
      <LinksList linksList={linksList}/>
    </div>
  )
}
