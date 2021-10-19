import styled from 'styled-components';

import propToStyle from '../../../../theme/util/propToStyle'; 

const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('margin')}
    ${propToStyle('width')}
    ${propToStyle('height')}
    ${propToStyle('borderRadius')}
`;

export default Box;
