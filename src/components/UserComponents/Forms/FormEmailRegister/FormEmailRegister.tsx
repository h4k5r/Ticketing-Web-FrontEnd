import React, {useEffect, useReducer} from "react";
import {Link} from "react-router-dom";
import classes from './FormEmailRegister.module.css'

import {emailFormReducer, initialEmailFormState} from "../../../../reducers/email-form-reducer";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import {emailLoginLink, emailPasswordResetLink, loginLink} from "../../../../LinkPaths";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {confirmPasswordValidator, emailValidator, passwordValidator} from "../../../../utils/validators";


const color:string = 'red';

const FormEmailRegister:React.FC<{}> = () => {

    const [state,dispatch] = useReducer(emailFormReducer,initialEmailFormState);
    const {isEmailValid,isPasswordValid,isConfirmPasswordValid} = state;
    useEffect(() => {
        if(isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            dispatch({type:'setFormIsValid',payload:true})
        }
    },[isEmailValid,isPasswordValid,isConfirmPasswordValid])
    const onEmailChangeHandler =  () => {
        dispatch({type:'setEmailIsValid',payload:true});
        dispatch({type:'setEmailErrorMessage',payload:''});
    }
    const onEmailBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        emailValidator(enteredEmail,dispatch);
    }
    const onPasswordChangeHandler = () => {
        dispatch({type:'setPasswordIsValid',payload:true});
        dispatch({type:'setPasswordErrorMessage',payload:''});
    }
    const onPasswordBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredPassword = event.target.value;
        passwordValidator(enteredPassword,dispatch);
        confirmPasswordValidator(enteredPassword,state.confirmPassword,dispatch);
        console.log(enteredPassword===state.confirmPassword)

    }
    const onConfirmPasswordChangeHandler = () => {
        dispatch({type:'setConfirmPasswordIsValid',payload:true});
        dispatch({type:'setConfirmPasswordErrorMessage',payload:''});
    }
    const onConfirmPasswordBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredConfirmPassword = event.target.value;
        confirmPasswordValidator(state.password,enteredConfirmPassword,dispatch)
    }
    const onsubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        // authContext.emailRegister(state.email,state.password,
        //     () => {
        //         console.log('registration Successful')
        //     },
        //     () => {
        //         console.log('registration Failed')
        //     });
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Your Credentials to Register</p>
            <form className={'formStyle'} onSubmit={onsubmitHandler}>

                <GradientInput label={'Email'} type={'text'} color={color} placeHolder={'Enter Email'}
                               onChangeHandler={onEmailChangeHandler} onBlurHandler={onEmailBlurHandler}/>

                {!state.isEmailValid &&
                state.emailErrorMessage.length > 0 &&
                <p className={'error'}>{state.emailErrorMessage}</p>}

                <GradientInput label={'Password'} type={'password'} color={color} placeHolder={'Enter Password'}
                               onChangeHandler={onPasswordChangeHandler} onBlurHandler={onPasswordBlurHandler}/>

                {!state.isPasswordValid &&
                state.passwordErrorMessage.length > 0 &&
                <p className={'error'}>{state.passwordErrorMessage}</p>}

                <GradientInput label={'Confirm Password'} type={'password'} color={color} placeHolder={'Enter Password again'}
                               onChangeHandler={onConfirmPasswordChangeHandler} onBlurHandler={onConfirmPasswordBlurHandler}/>

                {!state.isConfirmPasswordValid &&
                state.confirmPasswordErrorMessage.length > 0 &&
                <p className={'error'}>{state.confirmPasswordErrorMessage}</p>}

                <NormalGradientButton text={'Register'} buttonColor={color} cssClasses={[classes.btn]}
                                      disabled={!state.isFormValid} type={'submit'}/>
                <Link className={'link'} to={emailLoginLink}>Already Have an Account? Click Here.</Link>
                <Link className={'link'} to={emailPasswordResetLink}>Forgot Password?</Link>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormEmailRegister;