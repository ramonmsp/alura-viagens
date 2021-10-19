import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ${normalize}

    html,
    body {
        margin: 0;
        padding: 0;
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.background.main.color}


    }

    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
