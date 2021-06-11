import React from "react";
import {Link} from "react-router-dom";

import searchIcon from '../../images/bx_bx-search-alt.svg'
import trackIcon from '../../images/bx_bx-current-location.svg'
import profileIcon from  '../../images/vs_profile.svg'
import busIcon from '../../images/la_bus.svg'
import gear from '../../images/carbon_settings.svg';
import history from '../../images/ant-design_history-outlined.svg';
import logout from '../../images/ic_round-logout.svg';
import classes from './NavBar.module.css'

import NavBarItem, {subItem} from "./NavBarItem/NavBarItem";
import {useDispatch, useSelector} from "react-redux";
import {authActions, authObjectType} from "../../store/auth-slice";
import {Dispatch} from "@reduxjs/toolkit";


const NavBar:React.FC = () => {
    const dispatch:Dispatch = useDispatch();
    const authStatus = useSelector<{auth:authObjectType}>(state => state.auth.isLoggedIn)
    const accountSubItems:subItem[] = [
        {
            type:'link',
            imgLocation:history,
            toLocation:'/history',
            text:'View Ticket History',
        },
        {
            type:'link',
            imgLocation:gear,
            toLocation:'/profile',
            text:'View Profile Settings',
        },
        {
            type:'normal',
            imgLocation:logout,
            text:'Logout',
            onClickHandler: () => {
                dispatch(authActions.logout());
            }
        }
    ]
    return (
        <>
            <div className={classes.navbar}>
                <Link to={'/'} className={classes.brand}>
                    <img src={busIcon} alt={'bus-icon'}/>
                    <p>App Name</p>
                </Link>
                <ul className={classes.menuItems}>
                    <NavBarItem imageLocation={searchIcon} text={'Search'} location={'/search'}/>
                    <NavBarItem imageLocation={trackIcon} text={'Track'} location={'/track'} />
                    {!authStatus && <NavBarItem imageLocation={profileIcon} text={'Login'} location={'/login'}/> }
                    {authStatus && <NavBarItem imageLocation={profileIcon} text={'Account'} subItems={accountSubItems} /> }
                </ul>
            </div>
        </>
    )
}
export default NavBar;