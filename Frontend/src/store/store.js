import { legacy_createStore as createStore } from 'redux'

export const SET_LINKS_LIST = 'SET_LINKS_LIST'
export const ADD_LINK = 'ADD_LINK'
export const REMOVE_LINK = 'REMOVE_LINK'
export const UPDATE_LINK = 'UPDATE_LINK'
export const SET_LOADING = 'SET_LOADING'
export const SET_PERSONAL_DETAILS = 'SET_PERSONAL_DETAILS'

const initialState = {
  linksList: [{ _id: 'n199', platform: '', url: '', icon: '', }],
  personalDetails: {img: '',firstName: '', lastName: '', email: ''},
  isLoading: false,
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LINKS_LIST:
      return { ...state, linksList: action.linksList }

    case ADD_LINK:
      return { ...state, linksList: [...state.linksList, action.link] }

    case UPDATE_LINK:
      return {
        ...state,
        linksList: state.linksList.map(link =>
          link.id === action.link.id ? action.link : link
        ),
      }
    case REMOVE_LINK:
      console.log(action._id);
      return {
        ...state,
        linksList: state.linksList.filter(link => {
          link._id !== action._id
          console.log(link._id);
        }),
      }
    case SET_PERSONAL_DETAILS:
      return { ...state, personalDetails: action.personalDetails }
    default:
      return state
  }
}

export const store = createStore(appReducer)
window.gStore = store
