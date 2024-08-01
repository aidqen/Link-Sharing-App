import { useState } from "react";
import { LinkPreview } from "./LinkPreview"

export function LinksList({ handleLinksUpdate, linksToEdit, onSaveLinks, onRemoveLink}) {
  if (!linksToEdit) return



  return (
    <form className=" flex flex-col gap-4 h-[30em] overflow-y-auto custom-scrollbar">
      {(linksToEdit.length ||
        linksToEdit) && (
          <button onClick={(e) => onSaveLinks(e,linksToEdit)} className="px-5 border-[1px] border-purple-bright rounded-md py-2 text-white font-semibold bg-purple-bright hover:bg-white hover:text-purple-bright duration-200 w-[6em] my-3">
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
