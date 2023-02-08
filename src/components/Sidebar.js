import React from "react";
import '../App.css'
import {Sidebardata} from "./Sidebardata";

function Sidebar() {
    return(
        <div className='sidebar'>
            <div>
                <h1 style={{color: "darkblue"}}>Agensip Class</h1>
            </div>
            <ul className='sidebarlist'>
                {Sidebardata.map((val,key) => {
                return(
                    <li key={key}  className='row'>{""}
                        <div id = 'icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                    </li>
                );
            })}</ul>

        </div>
    );
}

export default Sidebar;