import React from "react";
import SearchResults from "../../../components/UserComponents/BusSearchResults/SearchResults";
import FormSearch from "../../../components/UserComponents/Forms/FormSearch/FormSearch";
import classes from './SearchPage.module.css';




const SearchPage : React.FC<{}> = () => {
    return (
        <section className={classes.searchSection}>
            <FormSearch/>
            <SearchResults/>
        </section>
    );
};
export default SearchPage;