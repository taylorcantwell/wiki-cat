import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import MostSearched from './components/MostSearched';
import Info from './components/Info';
import Footer from './components/Footer';
import Header from './components/Header';
import CatProfile from './components/CatProfile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import Loader from './components/Loader';

const AppShell = styled.div`
    padding: 0 18px;
    margin: 0 auto;
    max-width: 1266px;
`;

function App() {
    const isBreedListLoaded = useTypedSelector((state) => {
        return state.catList.loadedSearchList;
    });

    const isPopularBreedsLoaded = useTypedSelector((state) => {
        return state.visitList.loadedTopBreedsList;
    });

    const everythingLoaded = isBreedListLoaded && isPopularBreedsLoaded;

    console.log(everythingLoaded);
    console.log(isPopularBreedsLoaded);

    return (
        <AppShell>
            <Router>
                <Header />
                {!everythingLoaded && <Loader />}
                <Route exact path="/">
                    <Hero />
                    <MostSearched />
                    <Info />
                </Route>
                <Route path="/breed-profile" component={CatProfile} />
                <Footer />
            </Router>
            ) )
        </AppShell>
    );
}

export default App;
