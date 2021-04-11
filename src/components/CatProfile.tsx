import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchCatProfileInformation } from '../state/profileSlice';
import Loader from './Loader';
import PhotoGallery from './PhotoGallery';
import Rating from './Rating';
import { updateVisit } from '../util/incrementVisitorCounter';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const CatProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    //**Scroll to top when page renders */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(fetchCatProfileInformation(id, history));
            updateVisit(id);
        }
    }, []);

    const { profileInformation } = useTypedSelector(
        (state) => state.profileInformation
    );
    const profileLoading = useTypedSelector(
        (state) => state.profileInformation.profileLoading
    );

    return (
        <>
            {profileLoading ? (
                <Loader />
            ) : (
                <Container>
                    <Avatar src={`${profileInformation.image}`} />
                    <Main>
                        <Title>{profileInformation.name}</Title>
                        <Body>{profileInformation.description}</Body>
                        <RatingContainerTemper>
                            <LabelTemper>Temperament:</LabelTemper>
                            <Body>{profileInformation.temperament}</Body>
                        </RatingContainerTemper>
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
                            <Rating
                                rating={profileInformation.affectionLevel}
                            />
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
                            <Rating
                                rating={profileInformation.strangerFriendly}
                            />
                        </RatingContainer>
                    </Main>
                </Container>
            )}

            {!profileLoading && <PhotoGallery />}
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
    flex-basis: 50%;
    @media only screen and (min-width: ${MQ.large}) {
        margin-left: 115px;
    }
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
`;

const Label = styled.p`
    width: 150px;
    font-weight: bold;
    font-size: 16px;
    margin-right: 30px;
`;

const RatingContainerTemper = styled(RatingContainer)`
    align-items: flex-start;
    flex-direction: column;
    height: auto;
    margin-top: 20px;
`;

const LabelTemper = styled(Label)`
    margin-bottom: 8px;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    margin: 25px 0;
    color: #291507;
`;

const Avatar = styled.img`
    border-radius: 24px;
    object-fit: cover;
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
