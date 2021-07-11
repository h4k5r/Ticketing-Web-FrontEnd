import React, {useReducer, useRef} from "react";
import {Link} from "react-router-dom";
import classes from './FormEmailPasswordReset.module.css'
import {emailFormReducer, initialEmailFormState} from "../../../../reducers/email-form-reducer";
import {emailValidator} from "../../../../utils/validators";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {emailLoginLink} from "../../../../LinkPaths";
import fetch from "node-fetch";


const FormEmailPasswordReset: React.FC<{}> = () => {
    const color: string = 'violet';
    const [state, dispatch] = useReducer(emailFormReducer, initialEmailFormState);
    const emailRef = useRef(document.createElement('input'));
    const emailOnChangeHandler = () => {
        dispatch({type: 'setEmailIsValid', payload: true});
        dispatch({type: 'setEmailErrorMessage', payload: ''});
    }
    const emailOnBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        emailValidator(enteredEmail, dispatch);
    };
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if(state) {
            fetch('http://localhost:8080/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    email:emailRef.current.value
                })
            })
                .then(result => {
                    return result.json()
                })
                .then(data => {
                    if (data.error === false) {
                        console.log(data.errorMessage);
                        return;
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter your email to reset password</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <GradientInput label={'Email'} type={'email'} color={color} placeHolder={'Enter Email'}
                               onBlurHandler={emailOnBlurHandler} onChangeHandler={emailOnChangeHandler} ref={emailRef}/>
                <NormalGradientButton text={'Send Reset Link'} buttonColor={color} disabled={!state.isEmailValid} cssClassesOnContainer={[classes.btn]}/>
                <Link className={'link'} to={emailLoginLink}>Click Here to Login.</Link>
            </form>
        </div>
    );
}
export default FormEmailPasswordReset;