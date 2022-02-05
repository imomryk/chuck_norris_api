import { useSelector } from "react-redux"
import ErrorElem from "../ErrorElem"
import { JokesElem } from "../JokesElem/JokesElem"
export const JokesContainer=()=>{
    const jokes = useSelector(state=>state.jokes)
    
    return(
        <div>

        {jokes?jokes.map(({categories, updated_at, id, url, value})=>{
            return(
                <JokesElem key={id} categories={categories} updated_at={updated_at} id={id} url={url} value={value} isFavoriteElem={false}/>
            )
        }):<ErrorElem/>}
        </div>
        
    )
}

