/* eslint-disable react/jsx-no-undef */
import React from 'react';
import"./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar , IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className='sidebar' >
            <div className="Sidebar_header">
                <Avatar src="https://tse2.mm.bing.net/th?id=OIP.Wr3rTJj6fmtZsTn2iBmYVAHaFj&pid=Api&P=0&w=242&h=182"/>
                
                  <div className="sidebar_headerRight">
                  
                    <IconButton>                        
                         <DonutLargeIcon />   
                    </IconButton>  
                    <IconButton>
                         <ChatIcon />   
                    </IconButton> 
                    <IconButton>
                         <MoreVertIcon/>   
                    </IconButton>   
                   
                 </div>
             </div> 
            <div className ="sidebar_search">
                   <IconButton>
                    <SearchIcon />
                   </IconButton> 
               
            <div className = "sidebar_searchContainer">
                
                <input placeholder=  "Search or Start new chat"type="text" />
             </div>
                </div> 
                <div className = "sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                 </div>

         </div>
    )
}

export default Sidebar;
