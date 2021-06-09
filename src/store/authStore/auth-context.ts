import React, {useContext} from "react";
type authContextType = {
    isLoggedIn: boolean,
    isAdmin: boolean,
    emailRegister:(email:string, password:string) => void,
    emailLogin: (email:string, password:string) => void,
    Logout: () => void,
    phoneLogin: (phoneNumber:number) => void,
    otpVerify: (otp:number) => void,
    googleLogin: () => void

}

export const AuthContext:React.Context<authContextType> = React.createContext<authContextType>({
    isLoggedIn:false,
    isAdmin:false,
    emailRegister:() => {},
    emailLogin: () => {},
    Logout: () => {},
    phoneLogin: () => {},
    otpVerify: () => {},
    googleLogin: () => {}
});

export const useAuthContext: () => authContextType = () => {
    return useContext(AuthContext);
}


