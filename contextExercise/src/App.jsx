/**
 * 
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Submit your code once it is complete.
 */
import FavoriteLanguageContext from "./context/context";
import { useState } from "react";
import FavoriteLanguage from "./components/favoriteLaguage";
const languages = ['JavaScript', 'Python', 'TypeScript', 'C#', 'C++', 'PHP'];

export default function App() {
 return (
   <>
     <MainSection />
   </>
 );
}


function MainSection() {
  const [language, setLanguage] = useState(languages[0]);
  const [languageIndex, setLanguageIndex] = useState(1);
  
  const toggleLanguage = (index) => {
    setLanguageIndex(index);
    if (index == languages.length) {
      setLanguageIndex(0);
    }
    setLanguage(languages[languageIndex]);
  }
 return (
  <FavoriteLanguageContext.Provider value={language}>
    <div>
      <FavoriteLanguage/>
      <button id="changeFavorite" onClick={() => toggleLanguage(languageIndex + 1)}>toggle language</button>
    </div>
  </FavoriteLanguageContext.Provider>
 )
}
