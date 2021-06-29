import React, {Fragment} from "react";

import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";

import NavBarItem, {subItem} from "./NavBarItem/NavBarItem";
import {authActions, authObjectType} from "../../store/auth-slice";
import {
    searchLink, trackLink, loginLink,
    busesLink, stopsLink, staffLink, usersLink
} from '../../LinkPaths'

import searchIcon from '../../images/bx_bx-search-alt.svg'
import trackIcon from '../../images/bx_bx-current-location.svg'
import profileIcon from '../../images/vs_profile.svg'
import busIcon from '../../images/la_bus.svg'
import gear from '../../images/carbon_settings.svg';
import history from '../../images/ant-design_history-outlined.svg';
import logout from '../../images/ic_round-logout.svg';
import users from '../../images/clarity_users-line.svg';
import buses from '../../images/fa-solid_bus-alt.svg';
import staff from '../../images/medical-icon_care-staff-area.svg';
import stop from '../../images/ic_round-place.svg';
import classes from './NavBar.module.css'
import {busesListAction} from "../../store/buses-list-slice";
import {staffListAction} from "../../store/staff-list-slice";
import {stopsListAction} from "../../store/stops-list-slice";
import {userListAction} from "../../store/users-list-slice";


const NavBar: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const pathHistory = useHistory();
    const isAdmin: boolean = useSelector<{ auth: authObjectType }, boolean>(state => state.auth.isAdmin);
    const authStatus = useSelector<{ auth: authObjectType }, boolean>(state => state.auth.isLoggedIn);
    const userAccountSubItems: subItem[] = [
        {
            type: 'link',
            imgLocation: history,
            toLocation: '/history',
            text: 'View Ticket History',
        },
        {
            type: 'link',
            imgLocation: gear,
            toLocation: '/profile',
            text: 'View Profile Settings',
        },
        {
            type: 'normal',
            imgLocation: logout,
            text: 'Logout',
            onClickHandler: () => {
                console.log('customer logout triggered')
                dispatch(authActions.logout());
                pathHistory.replace('/')
            }
        }
    ]
    const adminAccountSubItems: subItem[] = [
        {
            type: 'normal',
            imgLocation: logout,
            text: 'Logout',
            onClickHandler: () => {
                dispatch(authActions.logout());
                dispatch(busesListAction.clearAll());
                dispatch(staffListAction.clearAll());
                dispatch(stopsListAction.clearAll());
                dispatch(userListAction.clearAll());
                pathHistory.replace('/')
            }
        }
    ];
    return (
        <>
            <div className={classes.navbar}>
                <Link to={'/'} className={classes.brand}>
                    <img src={busIcon} alt={'bus-icon'}/>
                    <p>App Name</p>
                </Link>
                <ul className={classes.menuItems}>
                    {
                        !isAdmin &&
                        <Fragment>
                            <NavBarItem imageLocation={searchIcon} text={'Search'} location={searchLink}/>
                            <NavBarItem imageLocation={trackIcon} text={'Track'} location={trackLink}/>
                            {!authStatus &&
                            <NavBarItem imageLocation={profileIcon} text={'Login'} location={loginLink}/>}
                            {authStatus &&
                            <NavBarItem imageLocation={profileIcon} text={'Account'} subItems={userAccountSubItems}/>}
                        </Fragment>
                    }
                    {
                        isAdmin && authStatus &&
                        <Fragment>
                            <NavBarItem imageLocation={buses} text={'Buses'} location={busesLink}/>
                            <NavBarItem imageLocation={stop} text={'Stops'} location={stopsLink}/>
                            <NavBarItem imageLocation={staff} text={'Staff'} location={staffLink}/>
                            <NavBarItem imageLocation={users} text={'Users'} location={usersLink}/>
                            <NavBarItem imageLocation={profileIcon} text={'Account'} subItems={adminAccountSubItems}/>
                        </Fragment>
                    }

                </ul>
            </div>
        </>
    )
}
export default NavBar;