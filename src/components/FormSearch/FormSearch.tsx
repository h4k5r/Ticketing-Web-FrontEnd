import React from "react";
import GrayCard from "../../UI/GrayCard/GrayCard";
import classes from "./FormSearch.module.css";
import TextInput from "../../UI/TextInput/TextInput";
import NormalGradientButton from "../../UI/Buttons/NormalButtons/NormalGradientButton/NormalGradientButton";

const FormSearch:React.FC<{}> = () => {
    return (
        <GrayCard cssClasses={[classes.searchCard]}>
            <h1 className={classes.headingText}>Search Buses</h1>
            <form className={classes.searchForm}>
                <TextInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Source'}
                           label={'Source Location'}/>
                <TextInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Destination'}
                           label={'Destination Location'}/>
                <NormalGradientButton text={'Search'} buttonColor={'red'} cssClasses={[classes.searchButton]}/>
                {/*<LinkGradientButton cssClasses={[classes.searchButton]} location={'/search'} text={'Search'}*/}
                {/*                    buttonColor={'red'}/>*/}
            </form>
        </GrayCard>
    );
}
export default FormSearch;