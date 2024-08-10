import { useState } from 'react';
import List from './Components/List';
import ImagesizeContext from './context/context';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 500 : 150;
  return (
    <ImagesizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImagesizeContext.Provider>
  )
}
