import * as React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { ReactComponent as CatwikiLogo } from '../images/CatwikiLogo.svg';

const Footer = () => {
    const history = useHistory();
    const onLogoClickHandle = () => {
        history.push({
            pathname: '/',
        });
    };

    return (
        <Container>
            <Logo onClick={onLogoClickHandle} />
            <Body>© created by Taylor - devChallenge.io 2021</Body>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    height: 125px;
    width: 100%;
    padding: 20px 29px;
    background: #000000;
    border-radius: 42px 42px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;

    @media only screen and (min-width: ${MQ.large}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
    }
`;

const Logo = styled(CatwikiLogo)`
    width: 100px;
    cursor: pointer;

    path {
        fill: white;
    }

    @media only screen and (min-width: ${MQ.large}) {
        width: 225px;
    }
`;

const Body = styled.p`
    color: #ffffff;
`;
