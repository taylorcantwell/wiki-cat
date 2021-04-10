import * as React from 'react';
import styled from 'styled-components';
import LoaderGif from '../images/Pulse.gif';

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderImage src={LoaderGif} />
        </LoaderContainer>
    );
};

const LoaderContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoaderImage = styled.img``;

export default Loader;
