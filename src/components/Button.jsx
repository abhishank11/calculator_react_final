import React from 'react';
import "./Button.css";

function Button(props){
return (
    <div onClick={() => props.buttonHandler((props.children))} className="box">
        {props.children}
    </div>

)};

  
export default Button;
