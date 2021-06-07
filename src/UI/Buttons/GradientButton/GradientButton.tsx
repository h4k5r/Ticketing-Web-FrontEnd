import React from "react";
import {Link} from "react-router-dom";

const GradientButton:React.FC<{
    location:string,
    text:string,
    buttonColor:string,}> = (props) => {
    return(
        <div>
            <Link to={props.location}>{props.text}</Link>
            <div/>
        </div>
    );
};
export default GradientButton;

