import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import MostSearched from './components/MostSearched';
import Info from './components/Info';
import Footer from './components/Footer';

const AppShell = styled.div`
    padding: 0 18px;
    margin: 0 auto;
    max-width: 1266px;
`;

function App() {
    return (
        <AppShell>
            <Hero />
            <MostSearched />
            <Info />
            <Footer />
        </AppShell>
    );
}

export default App;
