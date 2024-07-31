import { LinkPreview } from "./LinkPreview"

export function LinksList({ linksList, onUpdateLink}) {
  if (!linksList) return


  return (
    <form className=" flex flex-col gap-4 h-[30em] overflow-y-auto custom-scrollbar">
      {(linksList.length ||
        linksList) && (
          <button className="px-5 border-[1px] border-purple-bright rounded-md py-2 text-white font-semibold bg-purple-bright hover:bg-white hover:text-purple-bright duration-200 w-[6em] my-3">
            Save
          </button>
        )}
      {linksList.map((link, idx) => {
        return (
          <LinkPreview link={link} idx={idx} key={link.id} onUpdateLink={onUpdateLink}/>
        )
      })}
    </form>
  )
}
