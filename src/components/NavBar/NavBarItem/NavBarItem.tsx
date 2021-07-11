import React, {useState} from "react";
import classes from './NavBarItem.module.css';
import {Link, NavLink} from "react-router-dom";

export type subItem = {
    type: 'link' | 'normal'
    imgLocation: string,
    toLocation?: string,
    text: string,
    onClickHandler?: () => void
}
const NavBarItem: React.FC<{ imageLocation: string, text: string, location?: string, subItems?: subItem[] }> = (props) => {
    let NavItem;
    const [isMouseOn, setIsMouseOn] = useState(false)
    const onclickHandler = () => {
        setIsMouseOn((prevState => !prevState));
    }

    let NavSubItems
    if (props.subItems) {
        NavSubItems = (
            <div className={classes.subItemList}>
                {props.subItems.map((subItem) => {
                    if (subItem.type === "link") {
                        return (
                            <Link key={props.subItems?.indexOf(subItem)} className={classes.subItemLink}
                                  to={subItem.toLocation ? subItem.toLocation : ''}>
                                <img className={classes.image} src={subItem.imgLocation} alt={subItem.text}/>
                                {subItem.text}
                            </Link>
                        );
                    }
                    if (subItem.type === "normal") {
                        return (
                            <p key={props.subItems?.indexOf(subItem)}
                               className={`${classes.subItemLink} ${classes.logout}`} onClick={subItem.onClickHandler}>
                                <img className={classes.image} src={subItem.imgLocation} alt={subItem.text}/>
                                {subItem.text}
                            </p>
                        )
                    }
                    return null;
                })}
            </div>
        )
    }
    if (props.location) {
        NavItem = (
            <li>
                <NavLink className={classes.navDefault} activeClassName={classes.active} to={`${props.location}`}>
                    <img src={props.imageLocation} alt={props.text}/>
                    <p>{props.text}</p>
                </NavLink>
            </li>
        );
    } else {
        NavItem = (
            <>
                <li>
                    <p className={`${classes.navDefault} ${classes.pItem}`} onClick={onclickHandler}>
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