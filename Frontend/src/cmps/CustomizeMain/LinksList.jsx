import { useState } from "react";
import { LinkPreview } from "./LinkPreview"

export function LinksList({ handleLinksUpdate, linksToEdit, onSaveLinks, onRemoveLink}) {
  if (!linksToEdit) return



  return (
    <form className=" flex flex-col gap-4 h-[30em] overflow-y-auto custom-scrollbar">
      {(linksToEdit.length ||
        linksToEdit) && (
          <button onClick={(e) => onSaveLinks(e,linksToEdit)} className="main-btn">
            Save
          </button>
        )}
      {linksToEdit.map((link, idx) => {
        console.log(link);
        return (
          <LinkPreview link={link} idx={idx} key={link._id} handleLinksUpdate={handleLinksUpdate} onRemoveLink={onRemoveLink}/>
        )
      })}
    </form>
  )
}
