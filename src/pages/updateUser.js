import axios from 'axios'
import React, {useEffect, useState} from 'react'
export default function UserUpdate (){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRe, setPasswordRe] = useState('')
    const [usedEmail, setUsedEmail] = useState(false)
  
    const Id = window.location.pathname.split('/').slice(-1)[0]

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${Id}`)
        .then(res => res.json())
        .then(data => {
            setName(data[0].name)
            setEmail(data[0].email)
        })
    }, [])
    function submit(e){
      e.preventDefault();
      if (allClear()) { 
        let res = axios.post(`http://127.0.0.1:8000/api/user/update/${Id}`, {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordRe
        }).then(res=> {
            if (res.status === 200){
                window.location.pathname = '/dashboard/users'
            }
        })
        .catch(err=> err.response.status === 422 && setUsedEmail(true) )
        
      } 
    }
  
    function allClear(){
      return !nameError() && !emailError() && !passwordReError() && !passwordError()
    }
  
    function nameError(){
      if (!name) return 'Please enter a name!'
      if (name.split(' ').length > 3) return 'a name can\'t be more than 3 words!'
      if (name.split('').filter(e => e === '0' || +e >= 1 && +e <= 9).length >= 1) return 'a name can\'t contain numbers'
      return false
    }
  
    function emailError(){
      if (!email) return 'Please provide a proper email!'
      if (usedEmail) return 'This Email has alredy been used'
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
              onChange={(e) => {setEmail(e.target.value); setUsedEmail(false)}}
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
  
          
  
          
          <input type="submit" value="Update"/>
        </form>
  
      </div>
      
    </div>
    
      </div>
    );
}