import React, {useState} from "react";
import gear from '../../../images/carbon_settings.svg';
import history from '../../../images/ant-design_history-outlined.svg';
import logout from '../../../images/ic_round-logout.svg';
import classes from'./NavBarItem.module.css';
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActions} from "../../../store/auth-slice";
import {Dispatch} from "@reduxjs/toolkit";

const NavBarItem:React.FC<{imageLocation:string,text:string,location?:string}> = (props) => {
    let NavItem;
    const dispatch:Dispatch = useDispatch();
    const [isMouseOn,setIsMouseOn] = useState(false)
    const onclickHandler = () => {
        setIsMouseOn((prevState => !prevState));
    }
    const onLogoutClickHandler = () => {
        dispatch(authActions.logout);
    }
    const NavSubItems = (
        <div className={classes.subItemList}>
            <Link className={classes.subItemLink} to={'/history'}>
                <img className={classes.image} src={history} alt={'history-icon'}/>
                View Ticket History
            </Link>
            <Link className={classes.subItemLink} to={'/profile'}>
                <img className={classes.image} src={gear} alt={'settings-icon'}/>
                View Profile Settings
            </Link>
            <p className={`${classes.subItemLink} ${classes.logout}`} onClick={onLogoutClickHandler}>
                <img className={classes.image} src={logout} alt={'logout-icon'}/>
                Logout
            </p>
        </div>
    )
    if(props.location) {
        NavItem = (
            <li className={classes.navItem}>
                <NavLink className={classes.navDefault} activeClassName={classes.active} to={`${props.location}`}>
                    <img src={props.imageLocation} alt={props.text}/>
                    <p>{props.text}</p>
                </NavLink>
            </li>
        );
    }
    else {
        NavItem = (
            <>
                <li className={classes.navItem} >
                        <p className={classes.navDefault} onClick={onclickHandler}>
                            <img src={props.imageLocation} alt={props.text}/>
                            {props.text}
                        </p>
                    {isMouseOn && NavSubItems}
                </li>

            </>
        );
    }
    return (NavItem)

}
export default NavBarItem;