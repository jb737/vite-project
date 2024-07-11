
import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
   const [enteredName, setEnteredName] = useState("");
   return (
   <div>
      <h1>Hello, {enteredName}</h1>
      <input
      onChange = {(e) => {
         setEnteredName(e.target.value);
      }}
      type = "text"
      placeholder='Your name...'
      />
      <RegistrationForm />
   </div>
   );
};

export default App;
