import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PhotoGallery = () => {
    const { profileInformation } = useTypedSelector((state) => {
        return state.profileInformation;
    });

    return (
        <Container>
            <OtherPhotoLabel>Other Photos</OtherPhotoLabel>
            <PhotoContainer>
                {profileInformation.images.map((img) => {
                    return <Photo src={img} />;
                })}
            </PhotoContainer>
        </Container>
    );
};

export default PhotoGallery;

const Container = styled.div`
    padding: 20px 29px;
`;

const OtherPhotoLabel = styled.p`
    font-weight: 600;
    font-size: 36px;
    color: #291507;
`;

const PhotoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 50px;

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Photo = styled.img`
    width: 278px;
    height: 278px;
    object-fit: cover;
    border-radius: 12px;
    @media only screen and (min-width: ${MQ.large}) {
        max-width: 250px;
    }
`;
