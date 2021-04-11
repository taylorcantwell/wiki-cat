import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';

interface Props {
    rating: number | null;
}

const Rating = (props: Props) => {
    const { rating } = props;

    return (
        <Container rating={rating}>
            <Rectangle />
            <Rectangle />
            <Rectangle />
            <Rectangle />
            <Rectangle />
        </Container>
    );
};

export default Rating;

const Container = styled.div<{ rating: number | null }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:nth-child(-n + ${(props) => props.rating}) {
        background-color: #544439;
    }
`;

const Rectangle = styled.div`
    width: 30px;
    height: 12px;
    margin-right: 5px;
    background: #e0e0e0;
    border-radius: 8px;

    @media only screen and (min-width: ${MQ.large}) {
        width: 60px;
    }
`;
