import { createGlobalStyle } from 'styled-components';

export const mediaQueries = {
    small: '1px',
    medium: '425px',
    large: '1000px',
};

const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif; 
 
    /* overflow: scroll; */
}

input,
button,
textarea,
select {
    font: inherit;
}
`;

export default GlobalStyles;
