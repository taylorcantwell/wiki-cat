import * as React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import PhotoGallery from './PhotoGallery';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CatProfile = () => {
    const { profileInformation } = useTypedSelector((state) => {
        return state.profileInformation;
    });
    console.log(profileInformation);
    return (
        <>
            <Container>
                <Avatar src={`${profileInformation.image}`} />
                <Main>
                    <Title>{profileInformation.name}</Title>
                    <Body>{profileInformation.description}</Body>
                    <RatingContainer>
                        <Label>Temperament:</Label>
                        <Body>{profileInformation.temperament}</Body>
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Origin:</Label>
                        <Body>{profileInformation.origin}</Body>
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Life Span:</Label>
                        <Body>{profileInformation.lifeSpan}</Body>
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Adaptability:</Label>
                        <Rating rating={profileInformation.adaptability} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Affection level:</Label>
                        <Rating rating={profileInformation.affectionLevel} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Child Friendly:</Label>
                        <Rating rating={profileInformation.childFriendly} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Grooming:</Label>
                        <Rating rating={profileInformation.grooming} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Intelligence:</Label>
                        <Rating rating={profileInformation.intelligence} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Health issues:</Label>
                        <Rating rating={profileInformation.healthIssues} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Social needs:</Label>
                        <Rating rating={profileInformation.socialNeeds} />
                    </RatingContainer>
                    <RatingContainer>
                        <Label>Stranger friendly:</Label>
                        <Rating rating={profileInformation.strangerFriendly} />
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
        padding: 40px 108px;
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
    align-items: center;
    height: 45px;
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
    font-weight: 500;
    color: #291507;
`;

const Label = styled.p`
    width: 150px;
    font-weight: bold;
    font-size: 16px;
`;
