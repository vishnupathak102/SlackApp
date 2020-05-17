
import React from 'react';
import SideBar from './SideBar';
import ChatBox from './ChatBox';

const Body = (props)=>{
 
    return(
        <div className="row">
             <SideBar/>
             <ChatBox/>
        </div>
    )
}

export default Body;