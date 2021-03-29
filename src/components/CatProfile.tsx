import * as React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import PhotoGallery from './PhotoGallery';
import { mediaQueries as MQ } from '../GlobalStyles';

const CatProfile = () => {
    return (
        <>
            <Container>
                <Avatar src={'https://source.unsplash.com/random'} />
                <Main>
                    <Title>Test</Title>
                    <Body>Test data</Body>
                    <RatingContainer>
                        <Label>Temperament:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Origin:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Life Span:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Adaptability:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Affection level:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Child Friendly:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Grooming:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Intelligence:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Health issues:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Social needs:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Stranger friendly:</Label>
                        <Rating rating={3} />
                    </RatingContainer>
                </Main>
            </Container>
            <PhotoGallery />
        </>
    );
};

export default CatProfile;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${MQ.large}) {
        padding: 108px;
        flex-direction: row;
    }
`;

const Main = styled.div`
    @media only screen and (min-width: ${MQ.large}) {
        margin-left: 115px;
    }
`;

const RatingContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 25px;
    color: #291507;
`;

const Avatar = styled.img`
    border-radius: 24px;
    @media only screen and (min-width: ${MQ.large}) {
        width: 371.04px;
        height: 371.04px;
    }
`;

const Body = styled.div`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 25px;
    color: #291507;
`;

const Label = styled.p`
    width: 150px;
`;
