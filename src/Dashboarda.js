import React from "react";
import {Outlet, Link} from "react-router-dom"
export  default function Dashboarda(){
    return (
        <div>
            <aside>
                <div className="nav-list">
                    <Link to="/usersa">Users</Link>
                    <Link to="/groups">Groups</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/adminstration">Adminstration</Link>
                </div>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}