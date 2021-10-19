import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Input = styled(Text)`
  border: 1px solid ${(props) => get(props.theme, `colors.borders.${props.color}.color`)};
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;

  height: 48px;
  width: ${({ width }) => width}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'labelTextII',
};

export default function TextField({
  name,
  value,
  onChange,
  onKeyPress,
  onBlur,
  width,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        width={width}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  onChange: null,
  onKeyPress: null,
  onBlur: null,
};
