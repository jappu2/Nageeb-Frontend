import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    function logout(){
        window.localStorage.removeItem('email')
         window.location.pathname = '/'
    }
    return (
        <div className="header"> 
            <div className="logo">Nageeb</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>{
                 (window.localStorage.getItem('email')) 
                 ? <Link onClick={logout} className="btn">Logout</Link> 
                 : <>
                    <Link to="register" className="btn">Register</Link>
                    <Link to="login" className="btn">Log in</Link>
                </>
            }
        </div>
    )
}