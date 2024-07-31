import { utilService } from "../../services/util.service";
import { ADD_LINK } from "../store";

export function addLink() {
    gStore.dispatch({ type: ADD_LINK, link: {id: utilService.makeId(5), platform: '', link: ''} })
}