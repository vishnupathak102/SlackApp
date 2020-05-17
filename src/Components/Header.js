
import React from 'react';

const Header = (props)=>{
 
    return(
        <div className="row header-slack">
         <input className="search-box" type="text"/>
         <i className="fas fa-search search-icon"></i>
         <i className="fas fa-question-circle question-icon"></i>
        </div>
    )
}

export default Header;