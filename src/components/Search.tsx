import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { ReactComponent as CloseIcon } from '../images/closeIcon.svg';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';

export interface Props {}

const Search = (props: Props) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Input
                placeholder="Search"
                type="text"
                onClick={() => setModalActive(true)}
            ></Input>
            <StyledSearchIcon />
            <SearchBox></SearchBox>

            <MobileModal active={modalActive}>
                <MobileModalClose onClick={() => setModalActive(false)} />
                <MobileModalInput />
                <MobileModalSearchIcon />
                <MobileModalResultsContainer>
                    <MobileModalResults>
                        <MobileModalResultBody>Test Data</MobileModalResultBody>
                    </MobileModalResults>
                    <MobileModalResults>
                        <MobileModalResultBody>Test Data</MobileModalResultBody>
                    </MobileModalResults>
                    <MobileModalResults>
                        <MobileModalResultBody>Test Data</MobileModalResultBody>
                    </MobileModalResults>
                </MobileModalResultsContainer>
            </MobileModal>
        </>
    );
};

export default Search;

const Input = styled.input`
    width: 91.62px;
    height: 30.7px;
    padding: 7px 13px;
    border-radius: 59px;
    background: #ffffff;
    border: none;
    outline: none;
    margin-top: 5px;

    &::placeholder {
        font-size: 12px;
        font-weight: 500;
        color: black;
        opacity: 1;
    }

    @media only screen and (min-width: ${MQ.large}) {
        width: 394.62px;
        height: 69.67px;
        padding: 14px 26px;
        margin-top: 50px;

        &::placeholder {
            font-size: 22px;
            color: black;
        }
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    position: relative;
    left: -25px;
    top: 3px;
    fill: black;

    @media only screen and (min-width: ${MQ.large}) {
        top: 8px;
        left: -55px;
        width: 30px;
        height: 30px;
        fill: black;
    }
`;

const MobileModalSearchIcon = styled(StyledSearchIcon)`
    position: relative;
    height: 25px;
    width: 25px;
    left: 85%;
    top: -4.5%;
    fill: black;
    pointer-events: none;

    @media only screen and (min-width: ${MQ.large}) {
        display: none;
    }
`;

const SearchBox = styled.div`
    padding: 10px 8px;
    opacity: 1;
`;

const MobileModal = styled.div<{ active: boolean }>`
    display: ${(props) => (props.active ? 'block' : 'none')};
    padding: 5px 18px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    background: yellow;
    border-radius: 24px;

    @media only screen and (min-width: ${MQ.large}) {
        position: absolute;
        width: 394.62px;
        top: 90%;
        left: 4%;
        height: auto;
    }
`;

const MobileModalClose = styled(CloseIcon)`
    position: relative;
    left: 95%;
    cursor: pointer;

    @media only screen and (min-width: ${MQ.large}) {
        display: none;
    }
`;

const MobileModalInput = styled.input`
    padding: 0 20px;
    width: 100%;
    height: 45.51px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 59px;
    margin-top: 20px;
    outline: none;

    @media only screen and (min-width: ${MQ.large}) {
        display: none;
    }
`;

const MobileModalResultsContainer = styled.div``;

const MobileModalResults = styled.div`
    height: 56.16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 10px;

    &:hover {
        background: rgba(151, 151, 151, 0.1);
    }
`;

const MobileModalResultBody = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #000000;
`;
