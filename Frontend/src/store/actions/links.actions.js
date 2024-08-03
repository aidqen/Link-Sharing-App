import { utilService } from "../../services/util.service";
import { ADD_LINK, REMOVE_LINK, SET_LINKS_LIST, SET_PERSONAL_DETAILS, UPDATE_LINK } from "../store";

export function addLink() {
    var link = {_id: utilService.makeId(5), platform: '', link: ''}
    gStore.dispatch({ type: ADD_LINK, link})
}

export function saveLinks(linksList) {
    gStore.dispatch({ type: SET_LINKS_LIST, linksList })
}

export function savePersonalDetails(personalDetails) {
    gStore.dispatch({ type: SET_PERSONAL_DETAILS, personalDetails })
}

export function updateLink(link) {
    gStore.dispatch({ type: UPDATE_LINK, link })
}

export function removeLink(id) {
    gStore.dispatch({ type: REMOVE_LINK, _id: id })
}