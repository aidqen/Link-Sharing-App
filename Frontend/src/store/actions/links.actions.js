import { utilService } from "../../services/util.service";
import { ADD_LINK, UPDATE_LINK } from "../store";

export function addLink() {
export function saveLinks(linksList) {
    gStore.dispatch({ type: SET_LINKS_LIST, linksList })
}

export function savePersonalDetails(personalDetails) {
    gStore.dispatch({ type: SET_PERSONAL_DETAILS, personalDetails })
}

export function updateLink(link) {
    gStore.dispatch({ type: UPDATE_LINK, link })
}