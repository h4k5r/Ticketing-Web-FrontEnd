import React, {useRef} from "react";
import GrayCard from "../../UI/GrayCard/GrayCard";
import classes from "./FormSearch.module.css";
import GradientInput from "../../UI/GradientInput/GradientInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormSearch:React.FC<{}> = () => {
    const sourceRef = useRef<HTMLInputElement>(document.createElement('input'));
    const destinationRef = useRef<HTMLInputElement>(document.createElement('input'));
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredSource = sourceRef.current.value;
        const enteredDestination = destinationRef.current.value;
        console.log(enteredSource,enteredDestination);
    }
    return (
        <GrayCard cssClasses={[classes.searchCard]}>
            <h1 className={classes.headingText}>Search Buses</h1>
            <form className={classes.searchForm} onSubmit={onSubmitHandler}>
                <GradientInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Source'}
                               label={'Source Location'} ref={sourceRef}/>
                <GradientInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Destination'}
                               label={'Destination Location'} ref={destinationRef}/>
                <NormalGradientButton text={'Search'} buttonColor={'red'} cssClasses={[classes.searchButton]}/>
            </form>
        </GrayCard>
    );
}
export default FormSearch;