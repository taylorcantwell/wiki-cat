import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import image1 from '../images/image-1.png';
import image2 from '../images/image-2.png';
import image3 from '../images/image-3.png';

const Info = () => {
    return (
        <Container>
            <Main>
                <Line />
                <Title>Why should you have a cat?</Title>
                <Body>
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                </Body>
                <ReadMore>READ MORE</ReadMore>
            </Main>
            <Gallery>
                <Image src={image2} />
                <Image src={image3} />
                <Image src={image1} />
            </Gallery>
        </Container>
    );
};

export default Info;

const Container = styled.div`
    padding: 60px 29px;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${MQ.large}) {
        padding: 108px;
        flex-direction: row;
    }
`;

const Line = styled.div`
    width: 50.84px;
    height: 3.13px;
    background: #4d270c;
    border-radius: 77px;
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: #291507;
`;

const Body = styled.p`
    margin-top: 50px;
`;

const ReadMore = styled.p`
    margin-top: 27px;
    font-size: 18px;
    color: rgba(41, 21, 7, 0.6);
    font-weight: bold;
    cursor: not-allowed;
`;

const Gallery = styled.div`
    padding: 63px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

    @media only screen and (min-width: ${MQ.large}) {
        padding: 0px;
    }

    img:nth-of-type(2) {
        grid-row: 1 /3;
        grid-column: 2;
    }
    img:nth-of-type(3) {
        grid-row: 2 / 3;
        justify-self: end;
        width: 75%;
    }
`;

const Main = styled.div`
    @media only screen and (min-width: ${MQ.large}) {
        padding: 50px 0px;
    }
`;

// const Image = styled.div<{ image: string }>`
//     background-image: url(${(props) => props.image});
// `;

const Image = styled.img`
    width: 100%;
`;
