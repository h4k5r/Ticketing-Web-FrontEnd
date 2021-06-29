import React from "react";

export type emailFormState = {
    isEmailValid: boolean,
    emailErrorMessage: string,
    isPasswordValid: boolean,
    passwordErrorMessage: string,
    isConfirmPasswordValid: boolean,
    confirmPasswordErrorMessage: string,
    isFormValid: boolean,
    email: string,
    password: string,
    confirmPassword: string,
}
export type emailFormAction =
    { type: 'setEmailIsValid' | 'setPasswordIsValid' | 'setConfirmPasswordIsValid' | 'setFormIsValid', payload: boolean }
    |
    { type: 'setEmailErrorMessage' | 'setPasswordErrorMessage' | 'setConfirmPasswordErrorMessage', payload: string }
    |
    { type: 'setEmail' | 'setPassword' | 'setConfirmPassword', payload: string }

export const emailFormReducer: React.Reducer<emailFormState, emailFormAction> = (state, action) => {
    const updatedState = {...state}
    switch (action.type) {
        case "setEmail":
            updatedState.email = action.payload
            return updatedState;
        case 'setEmailIsValid' :
            updatedState.isEmailValid = action.payload
            return updatedState;
        case 'setEmailErrorMessage':
            updatedState.emailErrorMessage = action.payload
            return updatedState;

        case "setPassword":
            updatedState.password = action.payload
            return updatedState;
        case 'setPasswordIsValid':
            updatedState.isPasswordValid = action.payload
            return updatedState;
        case 'setPasswordErrorMessage':
            updatedState.passwordErrorMessage = action.payload
            return updatedState;

        case "setConfirmPassword":
            updatedState.confirmPassword = action.payload
            return updatedState;
        case 'setConfirmPasswordIsValid':
            updatedState.isConfirmPasswordValid = action.payload
            return updatedState;
        case 'setConfirmPasswordErrorMessage':
            updatedState.confirmPasswordErrorMessage = action.payload
            return updatedState;

        case "setFormIsValid":
            updatedState.isFormValid = action.payload
            return updatedState;
        default:
            return updatedState
    }
}

export const initialEmailFormState: emailFormState = {
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
    isFormValid: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
    confirmPasswordErrorMessage: '',
    email: '',
    password: '',
    confirmPassword: ''
}