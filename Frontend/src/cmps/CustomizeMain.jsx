import { useState } from "react";
import { LinksList } from "./LinksList";
import { LinksListHeader } from "./LinksListHeader";

export function CustomizeMain() {
    const [linksList, setLinksList] = useState(
        [{ platform: 'Instagram', link: 'https://www.instagram.com' }, { platform: 'Facebook', link: 'https://www.facebook.com' }, { platform: 'Twitter', link: 'https://www.twitter.com' },]
    );
    
    function onAddLink() {
        setLinksList(links => [{ platform: '', link: '' }, ...links])
    }

  return (
    <div className="customize-container px-10 pt-11 flex flex-col bg-white rounded-md w-full ">
      <LinksListHeader onAddLink={onAddLink}/>
      <LinksList linksList={linksList}/>
    </div>
  )
}
