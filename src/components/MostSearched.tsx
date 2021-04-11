import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchCatProfileInformation } from '../state/profileSlice';
import { fetchTopFour } from '../state/visitsSlice';
import { updateVisit } from '../util/incrementVisitorCounter';

const MostSearched = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        try {
            dispatch(fetchTopFour());
        } catch (err) {
            console.log(err.message);
        }
    }, []);

    const bag = useTypedSelector((state) => {
        return state.visitList.list;
    });

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
                {bag &&
                    bag.map((ele: any) => {
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
    color: #291507;

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
        color: #291507;
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
    grid-template-columns: 50% 50%;

    @media only screen and (min-width: ${MQ.large}) {
        grid-template-columns: 25% 25% 25% 25%;
    }
`;

const Card = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Avatar = styled.img`
    width: 134.77px;
    height: 134.77px;
    border-radius: 12px;
    @media only screen and (min-width: ${MQ.large}) {
        width: 220px;
        height: 220px;
    }
`;

const ImageLabel = styled.p<{ label: string }>`
    font-weight: 600;
    font-size: 18px;
    color: #291507;
`;

const VisitLabel = styled.p`
    font-size: 18px;
    color: #291507;
`;
