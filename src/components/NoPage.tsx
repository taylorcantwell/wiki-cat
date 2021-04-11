import * as React from 'react';
import styled from 'styled-components';

const NoPage = () => {
    return (
        <Container>
            <Body>Oops! Page doesn't exist.</Body>
            <Image src="https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897" />
        </Container>
    );
};

export default NoPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Body = styled.p`
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: white;
    z-index: 100;
    top: 135px;
`;
const Image = styled.img`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
