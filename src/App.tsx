import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import MostSearched from './components/MostSearched';

const AppContainer = styled.div`
    padding: 18px;
    margin: 0 auto;
    max-width: 1266px;
`;

function App() {
    return (
        <AppContainer>
            <Hero />
            <MostSearched />
        </AppContainer>
    );
}

export default App;
