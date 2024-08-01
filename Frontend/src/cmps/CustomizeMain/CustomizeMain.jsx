import { useState } from "react";
import { LinksList } from "./LinksList";
import { LinksListHeader } from "./LinksListHeader";
import { useSelector } from "react-redux";
import { addLink, removeLink, saveLinks, updateLink } from "../../store/actions/links.actions";

export function CustomizeMain() {
  const linksList = useSelector(state => state.linksList)  
  console.log(linksList);
    function onRemoveLink(id, e) {
      e.preventDefault()
      removeLink(id)
    }

    function onAddLink() {
      addLink()
    }

    function onSaveLinks(e, links) {
      e.preventDefault()
      saveLinks(links)
    }

  return (
    <div className="customize-container px-10 pt-11 flex flex-col bg-white rounded-md w-full ">
      <LinksListHeader onAddLink={onAddLink}/>
      <LinksList linksList={linksList} onSaveLinks={onSaveLinks} onRemoveLink={onRemoveLink}/>
    </div>
  )
}
