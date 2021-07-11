import React, {useEffect, useState} from "react";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import classes from './TrackPage.module.css'
import FormTrack from "../../../components/FormTrack/FormTrack";
import {GoogleMapAPIKey} from "../../../ApiKeys";
import {useDispatch} from "react-redux";
import {uiAction} from "../../../store/ui-slice";

export type location = {
    lat:number,
    lng:number
}
const TrackPage: React.FC<{}> = () => {
    const [location,setLocation] = useState<location>({ lat:0,lng:0});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiAction.closeMobileMenu());
    },[dispatch]);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GoogleMapAPIKey
    });

    return (
        <div className={classes.trackContainer}>
            {isLoaded && <GoogleMap mapContainerClassName={classes.map}
                                    id={'bus-tracker'}
                                    center={location} zoom={15}
            />}
            <FormTrack setLocation={setLocation}/>
        </div>
    )
}
export default TrackPage;