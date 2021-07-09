import React, {useEffect, useRef} from "react";
import classes from './FormProfile.module.css'
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import GrayCard from "../../../../UI/GrayCard/GrayCard";


const FormProfile: React.FC<{}> = () => {
    const nameInputRef = useRef(document.createElement('input'));
    useEffect(() => {
        fetch('http://localhost:8080/user/profile',{
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if (data.error) {
                    return;
                }
                nameInputRef.current.value = data.name;
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const onUpdateSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        fetch('http://localhost:8080/user/profile', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('authToken')
            },
            body: JSON.stringify({
                name: enteredName
            })
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <div className={classes.container}>
            <GrayCard cssClasses={[classes.subContainer]}>
                <h1 className={classes.mainText}>Profile Settings</h1>
                <form className={classes.formContainer} onSubmit={onUpdateSubmitHandler}>
                    <GradientInput type={'text'} color={'violet'} placeHolder={'Enter Name'} label={'Name'}
                                   cssClasses={[classes.nameInput]} ref={nameInputRef}/>
                    <NormalGradientButton text={'Update'} buttonColor={'violet'}
                                          cssClassesOnContainer={[classes.updateButton]}/>
                </form>
            </GrayCard>
        </div>


    );
}
export default FormProfile;