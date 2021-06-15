import React from "react";
import classes from '../ListStyles/ListStyle.module.css';
import StaffListItem from "./StaffListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
export type staff = {
    mail:string,
    id:string
}
const StaffList:React.FC<{}> = () => {
    const staff = useSelector((state:RootState) => state.staffList.result)
    return(
        <div className={classes.container}>
            <h1 className={classes.mainText}>Staff</h1>
            <div className={classes.subContainer}>
                {staff.id.length > 0 && <StaffListItem staffMail={staff.mail} staffId={staff.id}/>}
            </div>
        </div>
    )
}
export default StaffList;