import React, {useEffect, useRef, useState} from "react";
import classes from './FormResetPassword.module.css'
import close from '../../../../images/close.svg'
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import fetch from "node-fetch";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const FormResetPassword: React.FC<{
    type: 'user' | 'staff'
    onCloseHandler: () => void
}> = (props) => {
    const {type} = props;
    const selectedStaffId = useSelector((state: RootState) => state.staffList.selectedStaffId);
    const selectedUserId = useSelector((state: RootState) => state.usersList.selectedUserId);
    const [email, setEmail] = useState('');
    useEffect(() => {
        //fetchPerson with the email
        if (type === 'user' && selectedUserId.length > 0) {
            fetch(`http://localhost:8080/admin/searchUser/${selectedUserId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    console.log(data)
                    setEmail(data.email)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if (type === 'staff' && selectedStaffId.length > 0) {
            fetch(`http://localhost:8080/admin/searchStaff/${selectedStaffId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            })
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    setEmail(data.email)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [type, selectedStaffId, selectedUserId])
    const passwordInputRef = useRef(document.createElement('input'));
    const confirmPasswordInputRef = useRef(document.createElement('input'));
    const resetRequest = (link: string) => {
        const enteredPassword = passwordInputRef.current.value
        const enteredConfirmPassword = confirmPasswordInputRef.current.value
        if (enteredPassword !== enteredConfirmPassword) {
            return Promise.reject('Passwords Do not Match')
        }
        return fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: enteredPassword,
                confirmPassword: enteredConfirmPassword
            })
        })
            .then(result => {
                return result.json()
            })
    }
    const onResetSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (type === 'user') {
            resetRequest('http://localhost:8080/admin/resetUser')
                .then(data => {
                    console.log(data)
                    passwordInputRef.current.value = ''
                    confirmPasswordInputRef.current.value = ''
                    props.onCloseHandler()
                })
                .catch(err => {
                    console.log(err);
                })
        }
        if (type === 'staff') {
            resetRequest('http://localhost:8080/admin/resetStaff')
                .then(data => {
                    console.log(data)
                    passwordInputRef.current.value = ''
                    confirmPasswordInputRef.current.value = ''
                    props.onCloseHandler();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Reset password</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <div className={classes.forContainer}>
                <p>Reset Password for :</p>
                <p>{email}</p>
            </div>
            <form className={classes.inputsContainer} onSubmit={onResetSubmit}>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Password'}
                               label={'Password'} ref={passwordInputRef}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Confirm Password'}
                               label={'Confirm Password'} ref={confirmPasswordInputRef}/>
                <NormalGradientButton text={'Reset'} buttonColor={'violet'}
                                      cssClassesOnContainer={[classes.resetButton]}/>
            </form>
        </GrayCard>
    );
}
export default FormResetPassword