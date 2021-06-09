import React, {useRef, useState} from "react";
import classes from './FormPhoneRegister.module.css'
import GradientInput from "../../UI/GradientInput/GradientInput";
import {Link,useHistory} from "react-router-dom";
import {loginLink, phoneOtpLink} from "../../LinkPaths";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormPhoneRegister:React.FC<{}> = () => {
    const history = useHistory();
    const phoneNumberRef = useRef<HTMLInputElement>(document.createElement('input'));
    const codeRef = useRef<HTMLSelectElement>(document.createElement('select'));
    const [errorState,setErrorState] = useState({error:true,errorMessage:''});

    const color:string = 'red';
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const code = codeRef.current.value;
        console.log(code)
        history.push(phoneOtpLink);
    }
    const onNumberChangeHandler = () => {
        setErrorState({error: false,errorMessage:''});
    }
    const onBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredValue = +event.target.value;
        if(isNaN(enteredValue)) {
            setErrorState({error: true,errorMessage:'Enter A valid Number'});
            return
        }
        if (enteredValue.toString().length > 10 || enteredValue.toString().length < 10) {
            setErrorState({error: true,errorMessage:'Enter A 10 Digit Number'});
            return;
        }
        setErrorState({error: false,errorMessage:''});
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter Phone Number Without country Code</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <div className={classes.formSubContainer}>
                    <select ref={codeRef} className={classes.codeSelector}>
                        <option value={'91'}>+91 IND</option>
                    </select>
                    <GradientInput label={'Phone Number'} type={'string'} color={color}
                                   placeHolder={'Enter Phone Number'} cssClasses={[classes.numberInput]}
                                   ref={phoneNumberRef}
                                   onChangeHandler={onNumberChangeHandler} onBlurHandler={onBlurHandler}/>
                </div>
                {errorState.error && <p className={'error'}>{errorState.errorMessage}</p>}
                <NormalGradientButton text={'Get OTP'} buttonColor={'red'} type={'submit'} disabled={errorState.error}/>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormPhoneRegister;