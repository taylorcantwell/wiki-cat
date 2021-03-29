import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import MostSearched from './components/MostSearched';
import Info from './components/Info';
import Footer from './components/Footer';
import Header from './components/Header';
import CatProfile from './components/CatProfile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AppShell = styled.div`
    padding: 0 18px;
    margin: 0 auto;
    max-width: 1266px;
`;

function App() {
    return (
        <AppShell>
            <Router>
                <Route exact path="/">
                    <Header />
                    <Hero />
                    <MostSearched />
                    <Info />
                    <Footer />
                </Route>
                <Route path="/breed-profile" component={CatProfile} />
            </Router>
        </AppShell>
    );
}

export default App;
