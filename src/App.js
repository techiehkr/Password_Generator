import './App.css';
import React,{useState} from "react"
import logo from "./logo.png"
function App() {

  const [password,setPassword] = useState(0)

  function getPassword(length){
  var result = ""; 
  var keys = "ABABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}|:?<>?34567890~!@#$%^&*()_+{}|:?<>?CDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}|:?<>?";
  var charLength = keys.length; 

  for(var i = 0; i<length;i++){
      result+=keys.charAt(Math.floor(Math.random()*charLength));
  
  }
  return result;
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      <h2>Password Generater</h2>
        <input placeholder="Enter length of password" onChange={event=>setPassword(event.target.value)} name="length" min="8" max="99"/>
        
      <p>{getPassword(password)}</p>

    <b>Password contain</b>
      <i><ul>
        <li>Upper case</li>
        <li>Lower case</li>
        <li>Numbers </li>
        <li>Special Characters</li>
      </ul></i>
      
      </header>
    </div>
  );
}

export default App;
