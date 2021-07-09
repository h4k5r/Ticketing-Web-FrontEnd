import React, {useEffect, useReducer, useRef} from "react";
import classes from './FormAddPeople.module.css'
import close from '../../../../images/close.svg';
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import NormalGradientImageButton
    from "../../../../UI/Buttons/NormalButtons/NormalGradientImageButton/NormalGradientImageButton";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import fetch from "node-fetch";
import {emailFormReducer, initialEmailFormState} from "../../../../reducers/email-form-reducer";
import {confirmPasswordValidator, emailValidator, passwordValidator} from "../../../../utils/validators";

const FormAddPeople: React.FC<{ type: 'User' | 'Staff', onCloseHandler: () => void }> = props => {

    const [state, dispatch] = useReducer(emailFormReducer, initialEmailFormState);
    const {isEmailValid, isPasswordValid, isConfirmPasswordValid, isFormValid} = state;
    const emailInputRef = useRef(document.createElement('input'));
    const passwordInputRef = useRef(document.createElement('input'));
    const confirmPasswordInputRef = useRef(document.createElement('input'));
    useEffect(() => {
        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            dispatch({type: 'setFormIsValid', payload: true})
        }
    }, [isEmailValid, isPasswordValid, isConfirmPasswordValid])

    const onEmailChangeHandler = () => {
        dispatch({type: 'setEmailIsValid', payload: true});
        dispatch({type: 'setEmailErrorMessage', payload: ''});
    }

    const onEmailBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        emailValidator(enteredEmail, dispatch);
    }

    const onPasswordChangeHandler = () => {
        dispatch({type: 'setPasswordIsValid', payload: true});
        dispatch({type: 'setPasswordErrorMessage', payload: ''});
    }

    const onPasswordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredPassword = event.target.value;
        passwordValidator(enteredPassword, dispatch);
        confirmPasswordValidator(enteredPassword, state.confirmPassword, dispatch);
        console.log(enteredPassword === state.confirmPassword)

    }

    const onConfirmPasswordChangeHandler = () => {
        dispatch({type: 'setConfirmPasswordIsValid', payload: true});
        dispatch({type: 'setConfirmPasswordErrorMessage', payload: ''});
    }

    const onConfirmPasswordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const enteredConfirmPassword = event.target.value;
        confirmPasswordValidator(state.password, enteredConfirmPassword, dispatch)
    }

    const savePeople = (link: string) => {
        return fetch(link, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password,
                confirmPassword: state.confirmPassword
            })
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
                props.onCloseHandler();
            })
            .catch(err => {
                console.log(err)
            })
    }
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isFormValid) {
            return
        }

        if (props.type === 'User') {
            // send request to add User
            savePeople('http://localhost:8080/admin/addNewUser')
                .then(data => {
                    console.log(data)
                    emailInputRef.current.value = '';
                    passwordInputRef.current.value = '';
                    confirmPasswordInputRef.current.value = '';
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if (props.type === 'Staff') {
            // send request to add staff
            savePeople('http://localhost:8080/admin/addNewStaff')
                .then(data => {
                    console.log(data)
                    emailInputRef.current.value = '';
                    passwordInputRef.current.value = '';
                    confirmPasswordInputRef.current.value = '';
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    return (
        <GrayCard cssClasses={[classes.overAllContainer]}>
            <div className={classes.titleContainer}>
                <h1>Add New {props.type}</h1>
                <NormalGradientImageButton buttonColor={''} imageLocation={close} onClick={props.onCloseHandler}/>
            </div>
            <form className={classes.formContainer} onSubmit={onSubmitHandler}>
                <GradientInput type={'email'} color={'red'} placeHolder={'Enter Email Address'}
                               label={'Email'}
                               onChangeHandler={onEmailChangeHandler} onBlurHandler={onEmailBlurHandler}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Password'}
                               label={'Password'}
                               onChangeHandler={onPasswordChangeHandler} onBlurHandler={onPasswordBlurHandler}/>
                <GradientInput type={'password'} color={'red'} placeHolder={'Enter Confirm Password'}
                               label={'Confirm Password'}
                               onChangeHandler={onConfirmPasswordChangeHandler}
                               onBlurHandler={onConfirmPasswordBlurHandler}/>
                <NormalGradientButton text={`Add ${props.type}`} buttonColor={'green'}
                                      cssClassesOnContainer={[classes.addBtn]}/>
            </form>
        </GrayCard>
    )
}
export default FormAddPeople;