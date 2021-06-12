import React from "react";

export type phoneFormState = {
    isPhoneNumberValid:boolean,
    phoneNumberErrorMessage:string,
    isOTPValid:boolean,
    OTPErrorMessage:string,
    phoneNumber:number,
    OTP:number,
}

export type phoneFormAction =
    {type: 'setIsPhoneNumberValid' | 'setIsOTPValid', payload:boolean } |
    {type: 'setPhoneNumberErrorMessage' | 'setOTPErrorMessage', payload:string } |
    {type: 'setPhoneNumber' | 'setOTP', payload:number }

export const phoneFormReducer:React.Reducer<phoneFormState, phoneFormAction> = (state, action) => {
    const updatedState = {...state}
    switch (action.type) {
        case "setIsPhoneNumberValid":
            updatedState.isPhoneNumberValid = action.payload;
            return updatedState;
        case "setPhoneNumberErrorMessage":
            updatedState.phoneNumberErrorMessage = action.payload
            return updatedState;
        case "setPhoneNumber":
            updatedState.phoneNumber = action.payload;
            return updatedState;
        case "setIsOTPValid":
            updatedState.isOTPValid = action.payload;
            return updatedState;
        case "setOTPErrorMessage":
            updatedState.OTPErrorMessage= action.payload;
            return updatedState;
        case "setOTP":
            updatedState.OTP = action.payload;
            return updatedState;
        default:
            return updatedState;
    }
}
export const initialPhoneFormState:phoneFormState = {
    isPhoneNumberValid:false,
    phoneNumberErrorMessage:'',
    isOTPValid:false,
    OTPErrorMessage:'',
    phoneNumber:0,
    OTP:0,
}