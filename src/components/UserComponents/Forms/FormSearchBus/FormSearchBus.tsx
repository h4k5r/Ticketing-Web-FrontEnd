import React, {useRef} from "react";

import classes from "./FormSearchBus.module.css";
import GradientInput from "../../../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";
import GrayCard from "../../../../UI/GrayCard/GrayCard";
import {bus} from "../../BusSearchResults/SearchResults";
import {useDispatch} from "react-redux";
import {userSearchSliceActions} from "../../../../store/userSearch-slice";


const FormSearchBus: React.FC<{ setBuses: React.Dispatch<React.SetStateAction<bus[]>>}> = ( props) => {
    const dispatch = useDispatch();
    const sourceRef = useRef<HTMLInputElement>(document.createElement('input'));
    const destinationRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredSource = sourceRef.current.value;
        const enteredDestination = destinationRef.current.value;
        fetch('http://localhost:8080/user/searchBuses', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                source: enteredSource,
                destination: enteredDestination
            })
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                dispatch(userSearchSliceActions.setSearchData({source:enteredSource,destination:enteredDestination}));
                const newData = data.map((bus: { _id: string, busNumber: string }) => {
                    return {
                        id: bus._id,
                        number: bus.busNumber
                    }
                });
                props.setBuses([...newData]);
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <GrayCard cssClasses={[classes.searchCard]}>
            <h1 className={classes.headingText}>Search Buses</h1>
            <form className={classes.searchForm} onSubmit={onSubmitHandler}>
                <GradientInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Source'}
                               label={'Source Location'} ref={sourceRef}/>
                <GradientInput cssClasses={[classes.inputs]} type={'text'} color={'red'}
                               placeHolder={'Enter Destination'}
                               label={'Destination Location'} ref={destinationRef}/>
                <NormalGradientButton text={'Search'} buttonColor={'red'}
                                      cssClassesOnContainer={[classes.searchButton]}/>
            </form>
        </GrayCard>
    );
}
export default FormSearchBus;