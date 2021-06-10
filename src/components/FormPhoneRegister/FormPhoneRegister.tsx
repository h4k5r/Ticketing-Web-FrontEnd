import React, {useReducer, useRef} from "react";
import classes from './FormPhoneRegister.module.css'
import GradientInput from "../../UI/GradientInput/GradientInput";
import {Link,useHistory} from "react-router-dom";
import {loginLink, phoneOtpLink} from "../../LinkPaths";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {initialPhoneFormState, phoneFormReducer} from "../../store/reducers/phone-form-reducer";
import {phoneNumberValidator} from "../../utils/validators";
const color:string = 'red';
const FormPhoneRegister:React.FC<{}> = () => {
    const history = useHistory();
    const phoneNumberRef = useRef<HTMLInputElement>(document.createElement('input'));
    const codeRef = useRef<HTMLSelectElement>(document.createElement('select'));
    const [state,dispatch] = useReducer(phoneFormReducer,initialPhoneFormState);


    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const code = codeRef.current.value;
        console.log(code)
        history.push(phoneOtpLink);
    }
    const onNumberChangeHandler = () => {
        dispatch({type:'setIsPhoneNumberValid',payload:true});
        dispatch({type:'setPhoneNumberErrorMessage',payload:''});
    }
    const onBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredValue = event.target.value;
        phoneNumberValidator(enteredValue,dispatch);
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
                {!state.isPhoneNumberValid && <p className={'error'}>{state.phoneNumberErrorMessage}</p>}
                <NormalGradientButton text={'Get OTP'} buttonColor={'red'} type={'submit'} disabled={!state.isPhoneNumberValid}/>
                <Link className={'link'} to={loginLink}>Get in With Other Methods</Link>
            </form>
        </div>
    );
}
export default FormPhoneRegister;