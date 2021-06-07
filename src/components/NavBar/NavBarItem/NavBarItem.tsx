import React from "react";
import classes from'./NavBarItem.module.css'
import {NavLink} from "react-router-dom"

const NavBarItem:React.FC<{imageLocation:string,text:string,location:string}> = (props) => {
    return (
        <li className={classes.navItem}>
            <NavLink className={classes.navDefault} activeClassName={classes.active} to={props.location}>
                <img src={props.imageLocation} alt={props.text}/>
                <p>{props.text}</p>
            </NavLink>
        </li>
    );
}
export default NavBarItem;