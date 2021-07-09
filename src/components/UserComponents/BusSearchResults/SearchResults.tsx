import React from "react";

import classes from "./SearchResults.module.css";
import SearchResult from "./BusSearchResult/SearchResult";
import GrayCard from "../../../UI/GrayCard/GrayCard";

export type bus = {
    id: string,
    number: string,
    approxTime: string
}
const SearchResults:React.FC<{buses:bus[]}> = (props) => {

    return (
        <GrayCard cssClasses={[classes.resultCard]}>
            <h1 className={classes.headingText}>Results</h1>
            <div className={classes.results}>
                {props.buses.map((bus) => {
                    return <SearchResult key={bus.id} busId={bus.id} busNumber={bus.number}/>
                })}
            </div>
        </GrayCard>
    );
}
export default SearchResults;