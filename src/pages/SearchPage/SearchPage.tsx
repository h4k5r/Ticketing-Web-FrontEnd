import React from "react";
import classes from './SearchPage.module.css';
import SearchForm from "../../components/FormSearch/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage : React.FC<{}> = () => {
    return (
        <section className={classes.searchSection}>
            <SearchForm/>
            <SearchResults/>
        </section>
    );
};
export default SearchPage;