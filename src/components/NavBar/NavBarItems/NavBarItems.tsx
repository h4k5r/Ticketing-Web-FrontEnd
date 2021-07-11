import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import classes from "./NavBarItems.module.css";

import NavBarItem, {subItem} from "../NavBarItem/NavBarItem";
import {busesLink, loginLink, searchLink, staffLink, stopsLink, trackLink, usersLink} from "../../../LinkPaths";

import {authActions} from "../../../store/auth-slice";
import {busesListAction} from "../../../store/buses-list-slice";
import {staffListAction} from "../../../store/staff-list-slice";
import {stopsListAction} from "../../../store/stops-list-slice";
import {userListAction} from "../../../store/users-list-slice";


import searchIcon from "../../../images/bx_bx-search-alt.svg";
import trackIcon from "../../../images/bx_bx-current-location.svg";
import profileIcon from "../../../images/vs_profile.svg";
import buses from "../../../images/fa-solid_bus-alt.svg";
import stop from "../../../images/ic_round-place.svg";
import staff from "../../../images/medical-icon_care-staff-area.svg";
import users from "../../../images/clarity_users-line.svg";
import history from "../../../images/ant-design_history-outlined.svg";
import gear from "../../../images/carbon_settings.svg";
import logout from "../../../images/ic_round-logout.svg";


import {RootState} from "../../../store";

const NavBarItems: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const pathHistory = useHistory();
    const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
    const authStatus = useSelector((state: RootState) => state.auth.isLoggedIn);
    const isMobileOpen = useSelector((state: RootState) => state.uiReducer.isMobileMenuOpen);
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
                localStorage.removeItem('authToken');
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
                localStorage.removeItem('authToken');
                localStorage.removeItem('isAdmin');
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
        <ul className={`${classes.menuItems} ${isMobileOpen? classes.show : ''}`}>
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
    )
}
export default NavBarItems