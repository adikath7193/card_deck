import React from 'react';
import ReactDOM from 'react-dom';
import './level.css';
const Level = (props) => {
    var color ='';
    var level='';
    if(props.length==52){
        color="palegreen";
        level="none";
    }
    if(props.length<52&&props.length>=22){
        color="gold";
        level="beginner";
    }
       
    if(props.length<22&&props.length>=1){
        color="orange";
        level="veteran"
    }
        
    if(props.length==0){
        color="brown";
        level="godmode"
    }
      
    return(
        <div class='level'>
            <p className='levelheading'>OCD LEVEL</p>
            <p className='levelmode' style={{
                color:color
            }}>{level}</p>
            {
                (props.length==0)?(<button onClick={()=>{location.reload();}}>Retry</button>):''
            }
            
        </div>
    )
}
module.exports=Level;