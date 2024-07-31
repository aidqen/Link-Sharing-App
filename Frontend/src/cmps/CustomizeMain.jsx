import { useState } from "react";
import { LinksList } from "./LinksList";
import { LinksListHeader } from "./LinksListHeader";
import { useSelector } from "react-redux";
import { addLink, updateLink } from "../store/actions/links.actions";

export function CustomizeMain() {
  const linksList = useSelector(state => state.linksList)  
  console.log(linksList);

  

    function onAddLink() {
      addLink()
    }

    function onUpdateLink(link) {
      updateLink(link)
    }

  return (
    <div className="customize-container px-10 pt-11 flex flex-col bg-white rounded-md w-full ">
      <LinksListHeader onAddLink={onAddLink}/>
      <LinksList linksList={linksList} onUpdateLink={onUpdateLink}/>
    </div>
  )
}
