import * as React from 'react';
import styled from 'styled-components';
import HeroImagelg from '../images/HeroImagelg.png';
import HeroImagemd from '../images/HeroImagemd.png';
import HeroImagesm from '../images/HeroImagesm.png';
import Search from './Search';
import { mediaQueries as MQ } from '../GlobalStyles';
import { ReactComponent as CatwikiLogo } from '../images/CatwikiLogo.svg';

export interface Props {}

const Hero = () => {
    return (
        <Container>
            <Logo />
            <Subtitle>Get to know more about your cat breed</Subtitle>
            <Search />
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    background-image: url(${HeroImagesm});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 42px 42px 0px 0px;
    padding: 20px 29px;

    @media only screen and (min-width: ${MQ.medium}) {
        background-image: url(${HeroImagemd});
    }

    @media only screen and (min-width: ${MQ.large}) {
        background-image: url(${HeroImagelg});
        background-size: cover;
        padding: 108px;
        font-size: 24px;
        line-height: 29px;
    }
`;

const Logo = styled(CatwikiLogo)`
    path {
        fill: white;
    }

    @media only screen and (min-width: ${MQ.medium}) {
        width: 250px;
        height: 125px;
    }

    @media only screen and (min-width: ${MQ.large}) {
        width: 500px;
        height: 180px;
    }
`;

const Subtitle = styled.h2`
    font-weight: 500;
    font-size: 10px;
    color: #ffffff;
    margin-right: 50%;

    @media only screen and (min-width: ${MQ.large}) {
        font-size: 24px;
        margin-right: 65%;
    }
`;
