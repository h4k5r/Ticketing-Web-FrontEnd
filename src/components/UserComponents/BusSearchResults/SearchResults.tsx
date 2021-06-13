import React from "react";

import classes from "./SearchResults.module.css";
import SearchResult from "./BusSearchResult/SearchResult";
import GrayCard from "../../../UI/GrayCard/GrayCard";

const SearchResults:React.FC<{}> = () => {
    type bus = {
        id: string,
        number: string,
        approxTime: string
    }
    const buses: bus[] = [
        {
            id: 'sdfsdf1',
            number: 'TN 00 H4 K5R0',
            approxTime: '12:00PM'
        },
        {
            id: 'sdfsdf2',
            number: 'TN 00 H4 K5R0',
            approxTime: '12:00PM'
        },
        {
            id: 'sdfsdf3',
            number: 'TN 00 H4 K5R0',
            approxTime: '12:00PM'
        },
        {
            id: 'sdfsdf4',
            number: 'TN 00 H4 K5R0',
            approxTime: '12:00PM'
        },
    ]
    return (
        <GrayCard cssClasses={[classes.resultCard]}>
            <h1 className={classes.headingText}>Results</h1>
            <div className={classes.results}>
                {buses.map((bus) => {
                    return <SearchResult key={bus.id} busId={bus.id} busNumber={bus.number} approxTime={bus.approxTime}/>
                })}
            </div>
        </GrayCard>
    );
}
export default SearchResults;