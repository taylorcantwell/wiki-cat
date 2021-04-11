import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as CatwikiLogo } from '../images/CatwikiLogo.svg';

const Header = () => {
    const history = useHistory();
    const onLogoClickHandle = () => {
        history.push({
            pathname: '/',
        });
    };

    return (
        <Container>
            <Logo onClick={onLogoClickHandle} />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
`;

const Logo = styled(CatwikiLogo)`
    cursor: pointer;
`;
