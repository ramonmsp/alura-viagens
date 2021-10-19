import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import propToStyle from '../../../theme/util/propToStyle';

import textStylesVariantsMap from '../../../theme/util/textStylesVariantsMap';

const TextBase = styled.span`
    ${({ variant }) => textStylesVariantsMap[variant]}
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

    ${propToStyle('marginTop')}
    ${propToStyle('marginLeft')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'labelTextII',
  children: null,
};
