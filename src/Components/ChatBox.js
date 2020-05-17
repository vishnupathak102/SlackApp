
import React, { useState }  from 'react';
import _ from 'lodash';

const ChatBox = (props)=>{
 
    const [messege,addMessege] = useState([]);

    const [sms,changeSms] = useState("");
    

    const handleKeyDown = (e)=>{
      if(e.key === 'Enter'){
          console.log(e);
     addMessege(prevstate => _.compact([...prevstate,sms]));
     
     changeSms("");
     //console.log(messege)
      }
    }

    const handleChange = (e)=>{
        changeSms(e.target.value);
    }

    console.log(messege,"ekfe");
    return(
        <div className="col-lg-10 row">
            <div  style={{height:"89vh",overflow:"auto"}}>
            {
                _.map(messege,val=>(
                   <div style={{marginTop:"30px"}}>
                     <span style={{color:"black"}}>GitHub:</span>
                    <span style={{marginLeft:"30px"}}>{val}</span>
                    <span style={{marginLeft:"30px"}}>{"Sunday 17 May"}</span>
                    </div>
                ))
            }
            </div>
          <input value = {sms} onChange={(e)=>{handleChange(e)}} className="msessege-input" onKeyDown={(e)=>handleKeyDown(e)}  type="text" placeholder="Messge Maxiphysio" />
        </div>
    )
}

export default ChatBox;