import React from "react";
import classes from '../ListStyles/ListStyle.module.css';
import StaffListItem from "./StaffListItem";

const StaffList:React.FC<{}> = () => {
    return(
        <div className={classes.container}>
            <h1 className={classes.mainText}>Staff</h1>
            <div className={classes.subContainer}>
                <StaffListItem staffMail={'test@test.com'} staffId={'1v4752dfoi'}/>
                <StaffListItem staffMail={'test@test.com'} staffId={'1v4752dfoi'}/>
                <StaffListItem staffMail={'test@test.com'} staffId={'1v4752dfoi'}/>
                <StaffListItem staffMail={'test@test.com'} staffId={'1v4752dfoi'}/>
                <StaffListItem staffMail={'test@test.com'} staffId={'1v4752dfoi'}/>
            </div>
        </div>
    )
}
export default StaffList;