import React from "react"; 
import{AttachFile, MoreVert, SearchOutlined}
from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import "./Chat.css" 
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    return (
        <div className="Chat">
            <div className="chat_header">
                <Avatar src="https://wallpapercave.com/wp/wp5388908.jpg" />

                <div className="chat_headerInfo">
                    <h3>Sidhu Mossewala</h3>
                    <p>Online</p>

                </div>
                <div className ="chat_haederRight">
                    <IconButton>                        
                         <SearchOutlined />   
                    </IconButton>  
                    <IconButton>
                         <AttachFile />   
                    </IconButton> 
                    <IconButton>
                         <MoreVert />   
                    </IconButton>   
                   
                </div>
                
            </div>
              <div className = "chat_body">
                <p className = "chat_message">
                    <span className = "chat_name">Sidhu Mossewala</span>
                    Area Chon Firde Aa Ban Karde
                    Sitt Laina Sidhu Nu Plan Karde 
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
                 <p className = "chat_message chat_reciver">
                    <span className = "chat_name">Karan Aujla</span>
                    chill kr fun kr feda ki ae phuk k...
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
                
                 <p className = "chat_message">
                    <span className = "chat_name">Sidhu Mossewala</span>
                    Saazishan De Naal Saale Chaunde Aa Harauna
                    Tusi Bhul Jo
                    Bhul Jo, Eh Din Kade Nahio Auna
                    Tusi Bhul Jo
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
                 <p className = "chat_message chat_reciver">
                    <span className = "chat_name">Karan Aujla</span>
                       O nimbu waangu fad ke nachod dindey aa,
                       Siweya na naata sidha jod dindey aa
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
                 <p className = "chat_message">
                    <span className = "chat_name">Sidhu Mossewala</span>
                    Vairiyan Di Duniya Ch Kalla Ghumda
                    Ho Ki Karaan Honsle Aa Bade Yaar De
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
                 
                 
                 <p className = "chat_message chat_reciver">
                    <span className = "chat_name">Karan Aujla</span>
                       Oh Yaarian Pagaun De Ne Shaunk Mithiye
                       Hathi Lage Kutte Rahe Bhaunk Mithiye
                    <span className = "chat_timestamp">
                    {new Date().toUTCString()}
                    </span>    
                 </p>
              </div>
            <div className="chat_footer">
                <EmojiEmotionsIcon />
                <form>
                    <input
                    
                    placeholder = "Type a message"
                    type = "text"
                    />
                    <button  
                    type = "submit">
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    ); 
}

export default Chat
