
import React from 'react';

const SideBar = (props)=>{
 
    return(
        <div className="col-lg-2 row sidebar-mainpage">
        
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">Mentions and reactions</span>
              </div>
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">Drafts</span>
              </div>
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">Saved Items</span>
              </div>
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">People</span>
              </div>
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">Apps</span>
              </div>
              <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span  className="side-nav">Files</span>
              </div>
         


            <div style={{marginTop:"200px"}} className="sidenav-link">    
               <i  style={{padding:"9px"}} class="fal fa-angle-down"></i>
                <span className="side-nav">Channels</span>
            </div>

            <div  className="sidenav-link">    
               <span  style={{padding:"9px"}} className="side-nav">#</span>
                <span className="side-nav">Generals</span>
            </div>
            <div  className="sidenav-link">    
            <span  style={{padding:"9px"}} className="side-nav">#</span>
                <span className="side-nav">Randoms</span>
            </div>


            <div style={{marginTop:"200px"}} className="sidenav-link">    
               <i  style={{padding:"9px"}} class="fal fa-angle-down"></i>
                <span className="side-nav">Direct Messeges</span>
            </div>
            <div className="sidenav-link">
                <i style={{padding:"6px"}} className="fas fa-search "></i>
                <span className="side-nav">SlackBoa2</span>
              </div>
            
        </div>
    )
}

export default SideBar;