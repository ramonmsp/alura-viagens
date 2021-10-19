import styled from 'styled-components';
import get from 'lodash/get';

const AutocompleteWrapper = styled.div`
    position: relative;
`;

AutocompleteWrapper.Options = styled.div`
    background: white;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    height: 150px;
    top: 47px;
    border-radius: 10px;
    border: 1px solid ${(props) => get(props.theme, `colors.borders.${props.color}.color`)};
    z-index: 2;
    box-shadow: 0px 0px 4px rgba(33, 33, 33, 0.2);
`;

AutocompleteWrapper.Option = styled.div`
    padding: 8px;

    &:hover {
        background: #F1F1F1;
        cursor: pointer;
    }
`;

export default AutocompleteWrapper;
