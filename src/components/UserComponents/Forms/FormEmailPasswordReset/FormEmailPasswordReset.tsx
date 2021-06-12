import React, {useReducer} from "react";
import {Link} from "react-router-dom";
import {emailFormReducer, initialEmailFormState} from "../../../../reducers/email-form-reducer";
import {emailValidator} from "../../../../utils/validators";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import {emailLoginLink} from "../../../../LinkPaths";




const FormEmailPasswordReset:React.FC<{}> = () => {
    const color:string = 'violet';
    const [state,dispatch] = useReducer(emailFormReducer,initialEmailFormState);

    const emailOnChangeHandler = () => {
        dispatch({type:'setEmailIsValid',payload:true});
        dispatch({type:'setEmailErrorMessage',payload:''});
    }
    const emailOnBlurHandler = (event:React.FocusEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        emailValidator(enteredEmail,dispatch);
    };
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        // authContext.passwordReset(state.email,
        //     () => {},
        //     () => {})
    }
    return (
        <div className={'formContainer'}>
            <p className={'subText'}>Enter your email to reset password</p>
            <form className={'formStyle'} onSubmit={onSubmitHandler}>
                <GradientInput label={'Email'} type={'text'} color={color} placeHolder={'Enter Email'}
                               onBlurHandler={emailOnBlurHandler}  onChangeHandler={emailOnChangeHandler}/>
                <NormalGradientButton text={'Send Reset Link'} buttonColor={color} disabled={!state.isEmailValid}/>
                <Link className={'link'} to={emailLoginLink}>Click Here to Login.</Link>
            </form>
        </div>
    );
}
export default FormEmailPasswordReset;