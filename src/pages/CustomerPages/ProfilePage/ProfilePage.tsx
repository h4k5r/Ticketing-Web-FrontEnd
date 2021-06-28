import React, {useEffect, useState} from "react";
import FormProfile from "../../../components/UserComponents/Forms/FormProfile/FormProfile";


const ProfilePage : React.FC<{}> = () => {
    const [name,setName] = useState('')
    useEffect(() => {
        fetch('http://localhost:8080/user/profile')
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
                setName(data.name)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <FormProfile name={name}/>
    )
}
export default ProfilePage;