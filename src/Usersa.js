import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Usersa(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/user/show')
        .then(res=> res.json())
        .then(data=> setUsers(data))

    
    }, [])

    function deleteUser(id){
        axios.delete(`http://127.0.0.1:8000/ap/user/delete/${id}`)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }


    let showUsers = users.map((user, index) => (
        <div key={index}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>
                <span style={{color: 'blue'}}>Edit</span>
                <span onClick={() => deleteUser(user.id)} style={{color: 'red', marginLeft: '15px'}}>Delete</span>
            </div>
        </div>
     ))

    return (
        <div className="user-list">
            {showUsers}
        </div>
    )
}