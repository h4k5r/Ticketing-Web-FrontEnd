import React, {useEffect} from "react";
import FormProfile from "../../../components/UserComponents/Forms/FormProfile/FormProfile";
import {useDispatch} from "react-redux";
import {uiAction} from "../../../store/ui-slice";


const ProfilePage : React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    return (
        <FormProfile/>
    )
}
export default ProfilePage;