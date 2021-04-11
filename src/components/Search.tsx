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
    const ref = useRef<HTMLInputElement>(null);
    const catList = useTypedSelector((state) => state.catList.catList);
    const searchTermInput = useTypedSelector(
        (state) => state.catList.searchTerm
    );

    //**Modal functionality */
    useEffect(() => {
        if (modalActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [modalActive]);

    const handleClickOutside = (e: any) => {
        if (ref.current!.contains(e.target)) {
            document.removeEventListener('mousedown', handleClickOutside);
            return;
        }

        setModalActive(false);
    };

    const inputOnChangeHandle = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(searchTerm(event.target.value));
    };

    return (
        <>
            <InputContainer>
                <Input
                    placeholder="Search"
                    type="text"
                    onClick={() => setModalActive(true)}
                    onChange={inputOnChangeHandle}
                    active={modalActive}
                ></Input>
                <StyledSearchIcon active={modalActive} />
            </InputContainer>

            <Modal active={modalActive}>
                <ModalClose
                    onClick={() => {
                        setModalActive(false);
                    }}
                />

                <ModalResultsContainer ref={ref}>
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

const InputContainer = styled.div`
    position: relative;
`;

const Input = styled.input<{ active: boolean }>`
    width: 91.62px;
    height: 30.7px;
    padding: 7px 13px;
    border-radius: 59px;
    background: #ffffff;
    border: none;
    outline: none;
    transition: 0.2s ease-in;
    margin-top: 18px;

    &::placeholder {
        font-size: 12px;
        font-weight: 500;
        color: #291507;
        opacity: 1;
    }

    @media only screen and (min-width: ${MQ.large}) {
        width: 394.62px;
        height: 69.67px;
        padding: 14px 26px;
        margin-top: 50px;

        &::placeholder {
            font-size: 22px;
            color: #291507;
        }
    }

    width: ${(props) => props.active && '95%'};
`;

const StyledSearchIcon = styled(SearchIcon)<{ active: boolean }>`
    position: absolute;
    top: 24px;
    left: 65px;
    fill: black;
    width: 18px;
    height: 18px;
    z-index: 1000;
    transition: 0.2s ease-in;

    @media only screen and (min-width: ${MQ.large}) {
        width: 30px;
        height: 30px;
        fill: black;
        top: 70px;
        left: 350px;
    }

    opacity: ${(props) => (props.active ? '0' : '100')};
`;

const Modal = styled.div<{ active: boolean }>`
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    z-index: 100;
    top: 180px;
    left: 50%;
    right: 0;
    width: 95%;
    transform: translate(-50%, -0%);
    background: #ffffff;
    border-radius: 7px;

    @media only screen and (min-width: ${MQ.large}) {
        position: absolute;
        width: 394.62px;
        top: 85%;
        left: 9%;
        height: auto;
        transform: translate(-0%, -0%);
    }
`;

const ModalClose = styled(CloseIcon)`
    position: absolute;
    top: 5px;
    left: 90%;
    cursor: pointer;

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
    text-transform: capitalize;
`;

const ModalResultLink = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    color: #291507;
    text-decoration: none;
    text-transform: capitalize;
`;
