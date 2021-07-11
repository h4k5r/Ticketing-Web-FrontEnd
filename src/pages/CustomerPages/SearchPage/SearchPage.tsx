import React, {useEffect, useState} from "react";
import SearchResults, {bus} from "../../../components/UserComponents/BusSearchResults/SearchResults";
import FormSearchBus from "../../../components/UserComponents/Forms/FormSearchBus/FormSearchBus";
import classes from './SearchPage.module.css';
import {uiAction} from "../../../store/ui-slice";
import {useDispatch} from "react-redux";

const SearchPage : React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    const [buses,setBuses] = useState<bus[]>([]);
    return (
        <section className={classes.searchSection}>
            <FormSearchBus setBuses={setBuses}/>
            <SearchResults buses={buses}/>
        </section>
    );
};
export default SearchPage;