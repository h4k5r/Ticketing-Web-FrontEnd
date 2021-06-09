import React from "react";
import {Link} from "react-router-dom";

import searchIcon from '../../images/bx_bx-search-alt.svg'
import trackIcon from '../../images/bx_bx-current-location.svg'
import profileIcon from  '../../images/vs_profile.svg'
import busIcon from '../../images/la_bus.svg'

import classes from './NavBar.module.css'

import NavBarItem from "./NavBarItem/NavBarItem";
import {useAuthContext} from "../../store/authStore/auth-context";

const NavBar:React.FC = () => {
    const authContext = useAuthContext();
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
                    {!authContext.isLoggedIn && <NavBarItem imageLocation={profileIcon} text={'Login'} location={'/login'}/> }
                    {authContext.isLoggedIn && <NavBarItem imageLocation={profileIcon} text={'Account'} /> }
                </ul>
            </div>
        </>
    )
}
export default NavBar