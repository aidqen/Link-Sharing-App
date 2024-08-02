import { utilService } from "../../services/util.service";
import { ADD_LINK, UPDATE_LINK } from "../store";

export function addLink() {
export function saveLinks(linksList) {
    gStore.dispatch({ type: SET_LINKS_LIST, linksList })
}

}

export function updateLink(link) {
    gStore.dispatch({ type: UPDATE_LINK, link })
}