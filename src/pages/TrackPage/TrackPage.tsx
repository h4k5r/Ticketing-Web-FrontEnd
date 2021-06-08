import React from "react";
import {GoogleMap,useJsApiLoader} from '@react-google-maps/api'
import classes from './TrackPage.module.css'
import FormTrack from "../../components/FormTrack/FormTrack";
import {GoogleMapAPIKey} from "../../ApiKeys";

const TrackPage :React.FC<{}> = () => {
    const {isLoaded} = useJsApiLoader({
        id:'google-map-script',
        googleMapsApiKey:GoogleMapAPIKey
    });
    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div className={classes.trackContainer}>
            {isLoaded && <GoogleMap mapContainerClassName={classes.map}
                                    id={'bus-tracker'}
                                    center={center} zoom={10}
            />}
            <FormTrack/>
        </div>
    )
}
export default TrackPage;