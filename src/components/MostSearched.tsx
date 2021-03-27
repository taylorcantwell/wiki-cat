import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';

//! fix bug alignment of cards - right on is bursting out

const MostSearched = () => {
    return (
        <Container>
            <Title>Most Searched Breeds</Title>
            <Line />
            <Subtitle>66+ Breeds For you to discover</Subtitle>
            <SeeMore>See More!</SeeMore>
            <CardsContainer>
                <Card>
                    <Image />
                    <ImageLabel label={'test'}>Test</ImageLabel>
                </Card>
                <Card>
                    <Image />
                    <ImageLabel label={'test'}>Test</ImageLabel>
                </Card>
                <Card>
                    <Image />
                    <ImageLabel label={'test'}>Test</ImageLabel>
                </Card>
                <Card>
                    <Image />
                    <ImageLabel label={'test'}>Test</ImageLabel>
                </Card>
            </CardsContainer>
        </Container>
    );
};

export default MostSearched;

const Container = styled.div`
    position: relative;
    padding: 18px 28px 50px 28px;
    background-color: #e3e1dc;
    border-radius: 0px 0px 42px 42px;

    @media only screen and (min-width: ${MQ.large}) {
        padding: 108px;
    }
`;

const Title = styled.h2`
    font-weight: 500;
    font-size: 12px;
    color: #291507;

    @media only screen and (min-width: ${MQ.large}) {
        font-weight: 500;
        font-size: 18px;
    }

    /* identical to box height */
`;

const Line = styled.div`
    width: 40.89px;
    height: 3px;
    background: #4d270c;
    border-radius: 77px;
    margin-bottom: 17px;
`;

const Subtitle = styled.h3`
    margin-bottom: 46px;

    @media only screen and (min-width: ${MQ.large}) {
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 59px;
        color: #291507;
    }
`;

const SeeMore = styled.p`
    display: none;
    position: absolute;
    font-weight: bold;
    font-size: 18px;
    color: rgba(41, 21, 7, 0.6);
    right: 10%;
    top: 30%;
    @media only screen and (min-width: ${MQ.large}) {
        display: block;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    grid-template-columns: 50% 50%;

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: 25% 25% 25% 25%;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.div`
    width: 134.77px;
    height: 134.77px;
    background: url('https://source.unsplash.com/random');
    border-radius: 12px;

    @media only screen and (min-width: ${MQ.large}) {
        width: 220px;
        height: 220px;
        background: url('https://source.unsplash.com/random');
        border-radius: 24px;
    }
`;

const ImageLabel = styled.p<{ label: string }>`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #291507;
`;
