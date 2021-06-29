import React from "react";
import {emailFormAction} from "../reducers/email-form-reducer";
import {phoneFormAction} from "../reducers/phone-form-reducer";

const callbackChecker = (callback?: () => void) => {
    if (callback) {
        callback()
    }
}
type ForElement = 'Email' | 'Password' | 'ConfirmPassword'

const emailFormErrorDispatcher = (forElement: ForElement, dispatch: React.Dispatch<emailFormAction>,
                                  errorMessage: string) => {
    dispatch({type: `set${forElement}IsValid`, payload: false});
    dispatch({type: `set${forElement}ErrorMessage`, payload: errorMessage});
}

const emailFormSuccessDispatcher = (forElement: ForElement, dispatch: React.Dispatch<emailFormAction>,
                                    enteredValue: string) => {
    dispatch({type: `set${forElement}IsValid`, payload: true});
    dispatch({type: `set${forElement}ErrorMessage`, payload: ''});
    dispatch({type: `set${forElement}`, payload: enteredValue});
}

export const emailValidator = (enteredEmail: string, dispatch: React.Dispatch<emailFormAction>,
                               successCallback?: () => void, failureCallback?: () => void) => {
    if (!enteredEmail.includes('@')) {
        emailFormErrorDispatcher('Email', dispatch, 'Enter A valid Email')
        callbackChecker(failureCallback);
        return;
    }
    emailFormSuccessDispatcher('Email', dispatch, enteredEmail)
    callbackChecker(successCallback);
}

export const passwordValidator = (enteredPassword: string, dispatch: React.Dispatch<emailFormAction>,
                                  successCallback?: () => void, failureCallback?: () => void) => {
    if (enteredPassword.length < 6) {
        emailFormErrorDispatcher('Password', dispatch, 'Enter a password with more than 6 characters')
        callbackChecker(failureCallback);
        return;
    }
    emailFormSuccessDispatcher('Password', dispatch, enteredPassword)
    callbackChecker(successCallback);
}

export const confirmPasswordValidator = (enteredPassword: string, confirmPassword: string,
                                         dispatch: React.Dispatch<emailFormAction>,
                                         successCallback?: () => void, failureCallback?: () => void) => {
    if (enteredPassword !== confirmPassword) {
        emailFormErrorDispatcher('ConfirmPassword', dispatch, 'Passwords Do not Match')
        callbackChecker(failureCallback);
        return;
    }
    emailFormSuccessDispatcher('ConfirmPassword', dispatch, enteredPassword)
    callbackChecker(successCallback);
}

type phoneForElement = 'PhoneNumber' | 'OTP';
const phoneFormErrorDispatcher = (forElement: phoneForElement, dispatch: React.Dispatch<phoneFormAction>,
                                  errorMessage: string) => {
    dispatch({type: `setIs${forElement}Valid`, payload: false});
    dispatch({type: `set${forElement}ErrorMessage`, payload: errorMessage});
}
const phoneFormSuccessDispatcher = (forElement: phoneForElement, dispatch: React.Dispatch<phoneFormAction>,
                                    enteredValue: number) => {
    dispatch({type: `setIs${forElement}Valid`, payload: true});
    dispatch({type: `set${forElement}ErrorMessage`, payload: ''});
    dispatch({type: `set${forElement}`, payload: enteredValue});
}

export const phoneNumberValidator = (enteredPhoneNumber: string, dispatch: React.Dispatch<phoneFormAction>,
                                     successCallback?: () => void, failureCallback?: () => void) => {
    if (isNaN(+enteredPhoneNumber)) {
        phoneFormErrorDispatcher('PhoneNumber', dispatch, 'Enter A valid Number');
        callbackChecker(failureCallback);
        return;
    }
    if (enteredPhoneNumber.length > 10 || enteredPhoneNumber.length < 10) {
        phoneFormErrorDispatcher('PhoneNumber', dispatch, 'Enter A 10 Digit Number');
        callbackChecker(failureCallback);
        return;
    }
    phoneFormSuccessDispatcher('PhoneNumber', dispatch, +enteredPhoneNumber);
    callbackChecker(successCallback);
}

export const OTPValidator = (enteredOTP: string, dispatch: React.Dispatch<phoneFormAction>,
                             successCallback?: () => void, failureCallback?: () => void) => {
    console.log(+enteredOTP)
    if (isNaN(+enteredOTP)) {
        phoneFormErrorDispatcher('OTP', dispatch, 'Enter A valid OTP');
        callbackChecker(failureCallback);
        return;
    }
    if (enteredOTP.length > 6 || enteredOTP.length < 6) {
        phoneFormErrorDispatcher('OTP', dispatch, 'Enter A 6 Digit OTP');
        callbackChecker(failureCallback);
        return;
    }
    phoneFormSuccessDispatcher('OTP', dispatch, +enteredOTP);
    callbackChecker(successCallback);
}