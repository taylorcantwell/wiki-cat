import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CatwikiLogo } from '../images/CatwikiLogo.svg';

const Header = () => {
    return (
        <Container>
            <Logo />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
`;

const Logo = styled(CatwikiLogo)``;
