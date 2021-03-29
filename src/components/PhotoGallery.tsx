import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';

const PhotoGallery = () => {
    return (
        <Container>
            <OtherPhotoLabel>Other Photos</OtherPhotoLabel>
            <PhotoContainer>
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
                <Photo src={'https://source.unsplash.com/random'} />
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
    grid-gap: 16px;

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Photo = styled.img`
    max-width: 125px;

    background: url('https://source.unsplash.com/random');
    border-radius: 12px;
    @media only screen and (min-width: ${MQ.large}) {
        max-width: 250px;
    }
`;
