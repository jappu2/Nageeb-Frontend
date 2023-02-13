import {useState} from 'react'
import axios from 'axios'
import './App.css';



function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRe, setPasswordRe] = useState('')

  function submit(e){
    e.preventDefault();
    if (allClear()) { 
      // Send Data
      console.log('all clear.. data sent!')
      let res = axios.post('http://127.0.0.1:8000/api/regester', {
        name: name,
        email: email,
        password: password,
        conferm_password: passwordRe
      }).then(res=>console.log(res))
      
    } else{

    }
  }

  function allClear(){
    return !nameError() && !emailError() && !passwordReError() && !passwordError()
  }

  function nameError(){
    if (!name) return 'Please enter a name!'
    if (name.split(' ').length > 3) return 'a name can\'t be more than 3 words!'
    if (name.split('').filter(e => e == '0' || +e >= 1 && +e <= 9).length >= 1) return 'a name can\'t contain numbers'
    return false
  }

  function emailError(){
    if (!email) return 'Please provide a proper email!'
    return false
  }

  function passwordError(){
    if (password.length < 8) return 'Password must be at least 8 figuers'
    return false
  }
  function passwordReError(){
    return password !== passwordRe ? true : false
  }

  return (
    <div className="App">
       <div className="main-container">
    <div className="form-container">
      <form id="info-form" onSubmit={submit}>
        <span>Full Name</span>
        <input 
            type="text" 
            name="full-name" 
            placeholder="e.g. Jaber Ali"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            />
            {nameError() && <p className="errorMessage">{nameError()}</p>}

        <span>eMail</span>
        <input 
            type="email" 
            name="email" 
            placeholder="e.g. Jaber.Ali@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailError() && <p className="errorMessage">{emailError()}</p>}

        <span>Password</span>
        <input 
            type="password" 
            name="password" 
            placeholder="*******"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError() && <p className="errorMessage">Plese provide a proper password </p>}

        <span>Retype Password</span>
        <input 
            type="password" 
            name="retypepassword" 
            placeholder="*******"
            value={passwordRe}
            required
            onChange={(e) => setPasswordRe(e.target.value)}
            />
            {passwordReError() && <p className="errorMessage">Passwords don't match!</p>}

        

        
        <input type="submit" value="Sign Up"/>
      </form>

    </div>
    
  </div>
  
    </div>
  );
}

export default App;
