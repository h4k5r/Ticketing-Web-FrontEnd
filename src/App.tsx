import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import './App.css';
import backImg from './images/image_1.svg'

import {authActions, authObjectType} from "./store/auth-slice";

import NavBar from "./components/NavBar/NavBar";
import CustomerLandingPage from "./pages/CustomerPages/CustomerLandingPage/CustomerLandingPage";
import LoginPage from "./pages/CommonPages/LoginPage/LoginPage";
import ProfilePage from "./pages/CustomerPages/ProfilePage/ProfilePage";
import SearchPage from "./pages/CustomerPages/SearchPage/SearchPage";
import TicketHistoryPage from "./pages/CustomerPages/TicketHistoryPage/TicketHistoryPage";
import TrackPage from "./pages/CommonPages/TrackPage/TrackPage";
import BusesPage from "./pages/AdminPages/BusesPage/BusesPage";
import Stops from "./pages/AdminPages/StopsPage/Stops";
import StaffPage from "./pages/AdminPages/StaffPage/StaffPage";
import AdminLandingPage from "./pages/AdminPages/AdminLandingPage/AdminLandingPage";
import UsersPage from "./pages/AdminPages/UsersPage/UsersPage";
import {
    searchLink, loginLink, trackLink, profileLink, historyLink,
    busesLink, stopsLink, staffLink, usersLink
} from './LinkPaths'
import fetch from "node-fetch";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://localhost:8080/validateToken', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                if (data.error) {
                    dispatch(authActions.logout());
                    localStorage.removeItem('authToken')
                    return;
                }
                if (data.isAdmin) {
                    dispatch(authActions.adminIn());
                }
                dispatch(authActions.login())
            })
            .catch(err => {
                console.log(err);
            })
    }, [dispatch])
    const isAdmin: boolean = useSelector<{ auth: authObjectType }, boolean>(state => state.auth.isAdmin);
    const isLoggedIn: boolean = useSelector<{ auth: authObjectType }, boolean>(state => state.auth.isLoggedIn);
    return (
        <div className="App">
            <NavBar/>
            {
                !isAdmin && <Switch>
                    <Route path={'/'} exact><CustomerLandingPage/></Route>
                    {
                        isLoggedIn ? <Route path={loginLink}><Redirect to={searchLink}/></Route> :
                            <Route path={loginLink}><LoginPage/></Route>
                    }
                    <Route path={loginLink}><LoginPage/></Route>
                    <Route path={profileLink}><ProfilePage/></Route>
                    <Route path={searchLink}><SearchPage/></Route>
                    <Route path={historyLink}><TicketHistoryPage/></Route>
                    <Route path={trackLink}><TrackPage/></Route>
                    <Route path={'/'}> 404</Route>
                </Switch>
            }
            {
                isAdmin && <Switch>
                    <Route path={'/'} exact><AdminLandingPage/></Route>
                    <Route path={busesLink}><BusesPage/></Route>
                    <Route path={stopsLink}><Stops/></Route>
                    <Route path={staffLink}><StaffPage/></Route>
                    <Route path={usersLink}><UsersPage/></Route>
                    <Route path={'/'}> 404</Route>
                </Switch>
            }

            <div className={'back'}>
                <img className={'backImg'} src={backImg} alt={'bus-img'}/>
            </div>
        </div>
    );
}

export default App;
