import { useState } from 'react'
import { LinksList } from './LinksList'
import { LinksListHeader } from './LinksListHeader'
import { useSelector } from 'react-redux'
import {
  saveLinks,
} from '../../store/actions/links.actions'
import { utilService } from '../../services/util.service'

export function CustomizeMain() {
  const linksList = useSelector(state => state.linksList)
  const [linksToEdit, setLinksToEdit] = useState([...linksList])

  function handleLinksUpdate(index, newLink) {
    const newEditedLinks = [...linksToEdit]
    newEditedLinks[index] = newLink
    setLinksToEdit(newEditedLinks)
  }
  console.log(linksList)

  function onRemoveLink(id, e) {
    e.preventDefault()
    setLinksToEdit(prevState => prevState.filter(link => link._id !== id))
  }

  function onAddLink() {
    setLinksToEdit([
      ...linksToEdit,
      { _id: utilService.makeId(5), platform: '', url: '', icon: '' },
    ])
  }

  function onSaveLinks(e, links) {
    e.preventDefault()
    saveLinks(links)
  }

  return (
    <div className="customize-container px-10 pt-11 flex flex-col bg-white rounded-md w-full ">
      <LinksListHeader onAddLink={onAddLink} />
      <LinksList
        linksToEdit={linksToEdit}
        onSaveLinks={onSaveLinks}
        onRemoveLink={onRemoveLink}
        handleLinksUpdate={handleLinksUpdate}
      />
    </div>
  )
}
