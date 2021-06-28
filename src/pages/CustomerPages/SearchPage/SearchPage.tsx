import React, {useState} from "react";
import SearchResults, {bus} from "../../../components/UserComponents/BusSearchResults/SearchResults";
import FormSearchBus from "../../../components/UserComponents/Forms/FormSearchBus/FormSearchBus";
import classes from './SearchPage.module.css';

const SearchPage : React.FC<{}> = () => {
    const [buses,setBuses] = useState<bus[]>([]);
    return (
        <section className={classes.searchSection}>
            <FormSearchBus setBuses={setBuses}/>
            <SearchResults buses={buses}/>
        </section>
    );
};
export default SearchPage;