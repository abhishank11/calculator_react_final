import React from 'react';
import "./Clear.css";


function Clear(props){
 
    return<div onClick={props.handleClear} className="clear"> Clear </div>
};

export default Clear;