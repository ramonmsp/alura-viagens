import React from 'react';
import PropTypes from 'prop-types';

import RadioWrapper from './styles/RadioWrapper';

export default function Radio({
  name, value, srcimg, onClick, ...props
}) {
  return (
    <RadioWrapper
      onClick={onClick}
      data-click-area="true"
      {...props}
    >
      <input
        type="radio"
        name={name}
        value={value}
        srcimg={srcimg}
      />
      {
        (
          srcimg
          && (<img src={srcimg} alt={value} />)
        )
      }
      {' '}
      {value}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  srcimg: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Radio.defaultProps = {
  srcimg: null,
};
