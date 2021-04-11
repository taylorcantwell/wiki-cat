import { createGlobalStyle } from 'styled-components';

export const mediaQueries = {
    small: '1px',
    medium: '425px',
    large: '1300px',
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
    color: #291507;
}

input,
button,
textarea,
select {
    font: inherit;
}
`;

export default GlobalStyles;
