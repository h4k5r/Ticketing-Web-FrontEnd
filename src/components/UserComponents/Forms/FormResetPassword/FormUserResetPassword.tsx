import React, {useEffect, useReducer, useRef, useState} from "react";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {useHistory, useParams} from "react-router-dom";
import fetch from "node-fetch";
import {confirmPasswordValidator, passwordValidator} from "../../../../utils/validators";
import {emailFormReducer, initialEmailFormState} from "../../../../reducers/email-form-reducer";

import {emailLoginLink} from "../../../../LinkPaths";

const FormUserResetPassword: React.FC<{}> = () => {
    const history = useHistory();
    const {token} = useParams<{ token: string }>();
    const [email, setEmail] = useState('');
    const [state, dispatch] = useReducer(emailFormReducer, initialEmailFormState);
    const passwordInputRef = useRef(document.createElement('input'));
    const confirmPasswordInputRef = useRef(document.createElement('input'));

    useEffect(() => {
        fetch(`http://localhost:8080/newPassword/${token}`)
            .then(result => {
                return result.json()
            })
            .then(data => {
                if (data.err) {
                    history.replace('/')
                }
                setEmail(data.email);
            })
            .catch(err => {
                console.log(err);
            })
    }, [history, token]);
    const {isPasswordValid, isConfirmPasswordValid, isFormValid} = state;
    useEffect(() => {
        if (isPasswordValid && isConfirmPasswordValid) {
            dispatch({type: 'setFormIsValid', payload: true})
        } else {
            dispatch({type: 'setFormIsValid', payload: false})
        }
    }, [isFormValid,isPasswordValid, isConfirmPasswordValid])

    const onPasswordChangeHandler = () => {
        dispatch({type: 'setPasswordIsValid', payload: true});
        dispatch({type: 'setPasswordErrorMessage', payload: ''});
    }
    const onPasswordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredPassword = event.target.value;
        passwordValidator(enteredPassword, dispatch);
        confirmPasswordValidator(enteredPassword, state.confirmPassword.trim(), dispatch);
    }
    const onConfirmPasswordChangeHandler = () => {
        dispatch({type: 'setConfirmPasswordIsValid', payload: true});
        dispatch({type: 'setConfirmPasswordErrorMessage', payload: ''});
    }
    const onConfirmPasswordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredConfirmPassword = event.target.value;
        console.log(state);
        confirmPasswordValidator(state.password, enteredConfirmPassword.trim(), dispatch)
    }
    const onResetSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(!isFormValid) {
            return
        }
        const password = passwordInputRef.current.value;
        const confirmPassword = confirmPasswordInputRef.current.value;
        fetch(`http://localhost:8080/newPassword/${token}`, {
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                password:password,
                confirmPassword:confirmPassword
            })
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if(data.err) {
                    return Promise.reject('Error')
                }
                history.replace(emailLoginLink);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Reset Password for : {email}</p>
            <form className={'formStyle'} onSubmit={onResetSubmit}>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Password'}
                               label={'Password'} ref={passwordInputRef}
                               onChangeHandler={onPasswordChangeHandler} onBlurHandler={onPasswordBlurHandler}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Confirm Password'}
                               label={'Confirm Password'} ref={confirmPasswordInputRef}
                               onChangeHandler={onConfirmPasswordChangeHandler}
                               onBlurHandler={onConfirmPasswordBlurHandler}/>
                <NormalGradientButton text={'Save'} buttonColor={'violet'} disabled={!isFormValid}/>
            </form>
        </div>
    )
}
export default FormUserResetPassword;