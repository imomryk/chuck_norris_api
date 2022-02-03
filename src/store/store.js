
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { ADD_FAVORITES, REMOVE_FAVORITES, SET_CATEGORIES, SET_CURRENT_CATEGORY, SET_ERROR, SET_JOKES, SET_SEARCHFORM_ACTIVE_ELEM, SET_SEARCH_QUERY, TOGGLE_FAVORITES, } from "./types"


const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload }
        case SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        case SET_SEARCHFORM_ACTIVE_ELEM:
            return { ...state, searchformActiveElem: action.payload }
        case SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload }
        case SET_JOKES:
            return { ...state, jokes: action.payload }
        case SET_ERROR:{
            return {...state, jokes: action.payload}
        }

        case ADD_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] }
        case REMOVE_FAVORITES:
            return { ...state, favorites: state.favorites.filter((favorites) => favorites.id !== action.payload) }
        case TOGGLE_FAVORITES:
            return { ...state, openFavorites: action.payload }
        default:
            return state
    }
}

let preloadedState = {
    jokes:[],
    currentCategory: "animal",
    searchformActiveElem: "random",
    openFavorites: false
}
const persistedFavorites = localStorage.getItem('favorites')

if (persistedFavorites) {
    preloadedState.favorites = JSON.parse(persistedFavorites)
} else preloadedState.favorites = []

const store = createStore(reducer, preloadedState, applyMiddleware(thunk))
// store.subscribe(() => {
//     console.log(store.getState())
// })
export default store