import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PhotoGallery = () => {
    const { profileInformation } = useTypedSelector(
        (state) => state.profileInformation
    );

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
`;

const PhotoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    grid-gap: 50px;

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Photo = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (min-width: ${MQ.large}) {
        max-width: 250px;
        height: 250px;
    }
`;
