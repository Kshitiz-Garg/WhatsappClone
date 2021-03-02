import {Avatar} from "@material-ui/core";
import React from 'react';
import "./SidebarChat.css"; 

function SidebarChats() {
    return (
        <div className="SidebarChat">
            <Avatar src="https://wallpapercave.com/wp/wp5388908.jpg" />
            <div className="SidebarChat_info">
                <h2>Sidhu Mossewala</h2>
                <p>Hello Shitiz</p>
             </div>

             <Avatar src="https://wallpapercave.com/wp/wp5388908.jpg" />
            <div className="SidebarChat_info">
                <h2>Geet mp3</h2>
                <p>Hello Shitiz</p>
             </div>
            
         </div>

         

         

         
    )
}

export default SidebarChats;
