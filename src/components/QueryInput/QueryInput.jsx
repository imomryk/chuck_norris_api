import { useDispatch } from "react-redux"
import { SET_SEARCH_QUERY } from "../../store/types"

export const QueryInput =()=>{
    const dispatch = useDispatch()
    return(
        <input type="text" placeholder="Free text search..." className="queryInput" onChange={(event)=>{dispatch({type:SET_SEARCH_QUERY,payload:event.target.value})}}/>
    )
}