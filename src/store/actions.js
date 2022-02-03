import axios from "axios"
import { SET_CATEGORIES, SET_ERROR, SET_JOKES } from "./types"


export const getCategories = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`https://api.chucknorris.io/jokes/categories`)
        // console.log(data)
        dispatch(setCategories(data))
    }
}

export const setCategories = (data) => ({ type: SET_CATEGORIES, payload: data })


export const getJoke = ({ searchformActiveElem, currentCategory, searchQuery }) => {
    return async (dispatch) => {

        let request = `https://api.chucknorris.io/jokes/`

        if (searchformActiveElem === "random") {
            request += "random"
        } else if (searchformActiveElem === "category") {
            request += `random?category=${currentCategory}`
        } else {
            request += `search?query=${searchQuery}`
        }

        let { data } = await axios.get(request)
        searchformActiveElem !== "search" ? data = [data] : data = data.result
        // я с этим минут 30 боролся, пока не понял, что написал lenght вместо length. И что характерно, оно не подчеркивало ошибку, думая чтоя обращаюсь к такому ключу:(
        data.length===0?dispatch(setError()):dispatch(setJoke(data))
        
    }
}
export const setJoke = (data) => ({ type: SET_JOKES, payload: data })

export const setError=()=>({type:SET_ERROR,payload: false})
