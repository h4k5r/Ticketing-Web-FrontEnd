import React from "react";
import {Link} from "react-router-dom";

import NavBarItems from "./NavBarItems/NavBarItems";
import busIcon from '../../images/la_bus.svg'
import classes from './NavBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {uiAction} from "../../store/ui-slice";
import {RootState} from "../../store";


const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const isMobileOpen = useSelector((state: RootState) => state.uiReducer.isMobileMenuOpen);
    const burgerOnClick = () => {
        if (isMobileOpen) {
            dispatch(uiAction.closeMobileMenu());
        } else {
            dispatch(uiAction.openMobileMenu());
        }
    }
    return (
        <>
            <div className={classes.navbar}>
                <Link to={'/'} className={classes.brand}>
                    <img src={busIcon} alt={'bus-icon'}/>
                    <p>App Name</p>
                </Link>
                <div className={`${classes.burger}`} onClick={burgerOnClick}>
                    <div className={classes.burgerLines}> </div>
                    <div className={classes.burgerLines}> </div>
                    <div className={classes.burgerLines}> </div>
                </div>
                <NavBarItems/>
            </div>
        </>
    )
}
export default NavBar;