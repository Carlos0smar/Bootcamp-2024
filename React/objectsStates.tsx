import { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
type Person = {
  name: string;
  lastname: string;
  age: string;
}
function App() {
  const [person, setPerson] = useState<Person>({
    name: '',
    lastname: '',
    age: '',
  });
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    setPerson({...person, [target]: e.target.value});
  }
  const onSave = () => {
    console.log(person);
  }
  return (
    <>
      <input
        // onChange={onChangeName}
        onChange={(e) => onChangeText(e, 'name')}
        type="Text"
        placeholder='name'
      />
      <input
        // onChange={onChangeLastName}
        onChange={(e) => onChangeText(e, 'lastname')}
        type="Text"
        placeholder='lastname'
      />
      <input
        // onChange={onChangeAge}
        onChange={(e) => onChangeText(e, 'lastname')}
        type="Text"
        placeholder='age'
      />
      <button onClick={onSave}>Save</button>
      <MyButton
        title={'Click me!!'}
      />
      {person.name + ' ' + person.lastname}
    </>
  )
}
export default App