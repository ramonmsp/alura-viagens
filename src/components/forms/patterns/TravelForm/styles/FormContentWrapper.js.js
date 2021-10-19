/* eslint-disable indent */
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../../theme/util/breakpointsMedia';
import propToStyle from '../../../../../theme/util/propToStyle';
import textStylesVariantsMap from '../../../../../theme/util/textStylesVariantsMap';

const FormContentWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-left: 16px;

    ${breakpointsMedia({
        md: css`
            padding-left: 60px;

            h1 {
                ${textStylesVariantsMap.titleMD}
            }
        `,
    })}
`;

FormContentWrapper.InputGroup = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: ${({ flexDirection }) => (flexDirection || 'column')};

    ${breakpointsMedia({
        md: css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: ${({ flexDirection }) => (flexDirection || 'row')};

            input {
                width: ${({ sizeInput }) => sizeInput};
            }
        `,
    })}

    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
`;

export default FormContentWrapper;
