import  React from "react";
import {Link, Outlet} from 'react-router-dom'
export default function Dashboarda(){
    return (
        <div className="dashboard">
            <div className="dbd-nav">
                <Link to="users" >Users</Link>
                <Link to="groups" >Groups</Link>
                <Link to="settings" >Settings</Link>
                <Link to="more" >More</Link>

            </div>
            <div className="dbd-main">
            <Outlet />
            </div>
        </div>
    )
}