import  React, {useState, useEffect} from "react";
import axios  from "axios";
export default function Users(){
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/user/show')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))

    }, [])
    async function  deleteUser(id){
        await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
    }
    let showUsers = users.map((user, index)=> (
        <div key={index}>
            id is:  {user.id} <br/>
            username is:  {user.name} <br/>
            user email is:  {user.email}<br/><br/>
            <span onClick={() => deleteUser(user.id)} style={{color: 'red'}}>Del</span>
            <br/> <hr/>
        </div>
    ))
    return (
        <div>
            {showUsers}
        </div>
    )
}