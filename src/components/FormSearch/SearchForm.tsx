import React from "react";
import GrayCard from "../../UI/GrayCard/GrayCard";
import classes from "./SearchForm.module.css";
import TextInput from "../../UI/TextInput/TextInput";
import GradientButton from "../../UI/Buttons/GradientButton/GradientButton";

const SearchForm:React.FC<{}> = () => {
    return (
        <GrayCard cssClasses={[classes.searchCard]}>
            <h1 className={classes.headingText}>Search Buses</h1>
            <form className={classes.searchForm}>
                <TextInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Source'}
                           label={'Source Location'}/>
                <TextInput cssClasses={[classes.inputs]} type={'text'} color={'red'} placeHolder={'Enter Destination'}
                           label={'Destination Location'}/>
                <GradientButton cssClasses={[classes.searchButton]} location={'/search'} text={'Search'}
                                buttonColor={'red'}/>
            </form>
        </GrayCard>
    );
}
export default SearchForm;