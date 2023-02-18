import axios from 'axios'
import React, {useState} from 'react'
export default function Register (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrongComb, setWrongComb] = useState(false)
  
    function submit(e){
      e.preventDefault();

        // Send Data

        axios.post('http://127.0.0.1:8000/api/login', {
          email: email,
          password: password,
        }).then(res=> {
            if (res.status === 200){
                window.localStorage.setItem('email', email)
                window.location.pathname = '/'
            }
        })
        .catch(err=> err && setWrongComb(true))
        
    }

  
    return (
      <div className="App">
         <div className="main-container">
      <div className="form-container">
        <form id="info-form" onSubmit={submit}>
            {wrongComb && <p className="errorMessage">Wrong email or password! try again.</p>}
          <span>eMail</span>
          <input 
              type="email" 
              name="email" 
              placeholder="e.g. Jaber.Ali@gmail.com"
              value={email}
              required
              onChange={(e) => {setEmail(e.target.value); setWrongComb(false)}}
              />
  
          <span>Password</span>
          <input 
              type="password" 
              name="password" 
              placeholder="*******"
              value={password}
              required
              onChange={(e) => {setPassword(e.target.value); setWrongComb(false)}}
              />
  
          
          <input type="submit" value="Log in"/>
        </form>
  
      </div>
      
    </div>
    
      </div>
    );
}