import React from "react";
import classes from './SearchPage.module.css';
import FormSearch from "../../components/FormSearch/FormSearch";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage : React.FC<{}> = () => {
    return (
        <section className={classes.searchSection}>
            <FormSearch/>
            <SearchResults/>
        </section>
    );
};
export default SearchPage;