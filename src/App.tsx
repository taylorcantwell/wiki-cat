import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CatProfile from './components/CatProfile';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Loader from './components/Loader';
import MostSearched from './components/MostSearched';
import NoPage from './components/NoPage';
import { useTypedSelector } from './hooks/useTypedSelector';
import { fetchCatList } from './state/catListSlice';
import { fetchTopFour } from './state/visitsSlice';

const AppShell = styled.div`
    padding: 0 18px;
    margin: 0 auto;
    max-width: 1266px;
`;

function App() {
    const dispatch = useDispatch();
    //** Fetch the list of cat breeds for the search bar */
    useEffect(() => {
        dispatch(fetchCatList());
    }, []);

    //**Fetch the top four most visited breeds */
    useEffect(() => {
        dispatch(fetchTopFour());
    }, []);

    //**Grab loading state to determine what to render */
    const isBreedListLoaded = useTypedSelector((state) => {
        return state.catList.loadedSearchList;
    });

    const isPopularBreedsLoaded = useTypedSelector((state) => {
        return state.visitList.loadedTopBreedsList;
    });

    const everythingLoaded = isBreedListLoaded && isPopularBreedsLoaded;

    return (
        <AppShell>
            {!everythingLoaded ? (
                <Loader />
            ) : (
                <>
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Hero />
                                <MostSearched />
                                <Info />
                            </Route>
                            <Route
                                path="/breed-profile/:id"
                                component={CatProfile}
                            />
                            <Route path="/404" component={NoPage} />
                            <Route component={NoPage} />
                        </Switch>
                        <Footer />
                    </Router>
                </>
            )}
        </AppShell>
    );
}

export default App;
