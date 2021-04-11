import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTopFour } from '../state/visitsSlice';

const MostSearched = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchTopFour());
    }, []);

    const fourMostSearchedBreeds = useTypedSelector(
        (state) => state.visitList.list
    );

    const onClickHandle = (id: string) => {
        history.push({
            pathname: `/breed-profile/${id}`,
        });
    };

    return (
        <Container>
            <Title>Most Viewed Breeds</Title>
            <Line />
            <Subtitle>66+ Breeds For you to discover</Subtitle>
            <SeeMore>See More!</SeeMore>
            <CardsContainer>
                {fourMostSearchedBreeds &&
                    fourMostSearchedBreeds.map((ele: any) => {
                        return (
                            <Card
                                onClick={() => {
                                    onClickHandle(ele.id);
                                }}
                            >
                                <Avatar src={`${ele.image}`} />
                                <ImageLabel label={ele.image}>
                                    {ele.name}
                                </ImageLabel>
                                <VisitLabel>Visits: {ele.visits}</VisitLabel>
                            </Card>
                        );
                    })}
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

    @media only screen and (min-width: ${MQ.large}) {
        font-size: 18px;
    }
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
    }
`;

const SeeMore = styled.p`
    cursor: not-allowed;
    display: none;
    position: absolute;
    font-weight: bold;
    font-size: 18px;
    color: rgba(41, 21, 7, 0.6);
    right: 10%;
    top: 27%;
    @media only screen and (min-width: ${MQ.large}) {
        display: block;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr;

    @media only screen and (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Card = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        filter: brightness(0.9);
    }
`;

const Avatar = styled.img`
    width: 125px;
    height: 125px;
    object-fit: cover;
    border-radius: 12px;

    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        width: 275px;
        height: 275px;
        object-fit: cover;
    }

    @media only screen and (min-width: ${MQ.large}) {
        width: 220px;
        height: 220px;
    }
`;

const ImageLabel = styled.p<{ label: string }>`
    font-weight: 600;
    font-size: 12px;
    margin-top: 11px;
`;

const VisitLabel = styled.p`
    font-weight: 600;
    font-size: 10px;
`;
