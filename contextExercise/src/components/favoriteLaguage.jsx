import { useContext } from "react"
import FavoriteLanguageContext from "../context/context"

const favoriteLanguage = () => {
    const language = useContext(FavoriteLanguageContext)
    return (
        <>
            <div>
                <p id="favoriteLanguage">favorite programing language: {language}</p>
            </div>
        </>
    )
}

export default favoriteLanguage