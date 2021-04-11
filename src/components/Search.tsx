import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries as MQ } from '../GlobalStyles';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ReactComponent as CloseIcon } from '../images/closeIcon.svg';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';
import { searchTerm } from '../state/catListSlice';
import { filterCatList } from '../util/searchListFilter';

const Search = () => {
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);
    const catList = useTypedSelector((state) => state.catList.catList);
    const searchTermInput = useTypedSelector(
        (state) => state.catList.searchTerm
    );
    const node = useRef<HTMLInputElement>(null);

    //**Modal functionality */
    useEffect(() => {
        if (modalActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [modalActive]);

    const handleClickOutside = (e: MouseEvent) => {
        //@ts-ignore
        if (node.current!.contains(e.target)) {
            document.removeEventListener('mousedown', handleClickOutside);
            return;
        }

        setModalActive(false);
    };

    const inputOnChangeHandle = (e: any) => {
        dispatch(searchTerm(e.target.value));
    };

    return (
        <>
            <Input
                placeholder="Search"
                type="text"
                onClick={() => setModalActive(true)}
                onChange={inputOnChangeHandle}
            ></Input>
            <StyledSearchIcon />

            <Modal active={modalActive}>
                <ModalClose
                    onClick={() => {
                        setModalActive(false);
                    }}
                />
                <ModalInput />
                <ModalSearchIcon />
                <ModalResultsContainer ref={node}>
                    {!filterCatList(catList, searchTermInput)[0] ? (
                        <ModalNoResult>No result</ModalNoResult>
                    ) : (
                        filterCatList(catList, searchTermInput).map(
                            (cat: { name: string; id: string }) => {
                                return (
                                    <ModalResults
                                        to={`/breed-profile/${cat.id}`}
                                        key={cat.id}
                                    >
                                        <ModalResultLink
                                            to={`/breed-profile/${cat.id}`}
                                        >
                                            {cat.name}
                                        </ModalResultLink>
                                    </ModalResults>
                                );
                            }
                        )
                    )}
                </ModalResultsContainer>
            </Modal>
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

const ModalSearchIcon = styled(StyledSearchIcon)`
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

const Modal = styled.div<{ active: boolean }>`
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #ffffff;
    border-radius: 7px;

    @media only screen and (min-width: ${MQ.large}) {
        position: absolute;
        width: 394.62px;
        top: 85%;
        left: 9%;
        height: auto;
    }
`;

const ModalClose = styled(CloseIcon)`
    position: relative;
    left: 95%;
    cursor: pointer;

    @media only screen and (min-width: ${MQ.large}) {
        display: none;
    }
`;

const ModalInput = styled.input`
    padding: 0 20px;
    width: 100%;
    height: 45.51px;
    background: #ffffff;
    border: 1px solid #000000;
    margin-top: 20px;
    outline: none;

    @media only screen and (min-width: ${MQ.large}) {
        display: none;
    }
`;

const ModalResultsContainer = styled.div`
    overflow-y: scroll;
    max-height: 350px;
    background: #ffffff;
    border-radius: 7px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 3px solid grey;
    }
`;

const ModalResults = styled(Link)`
    height: 56.16px;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: rgba(151, 151, 151, 0.1);
    }
`;

const ModalNoResult = styled.div`
    height: 56.16px;
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-transform: capitalize;
`;

const ModalResultLink = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    text-transform: capitalize;
`;
