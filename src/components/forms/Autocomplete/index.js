import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AutocompleteWrapper from './styles/AutocompleteWrapper';
import TextField from '../TextField';

export default function Autocomplete({
  monitorField, options, optionValue, name, width, color, ...props
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState({});
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    let fieldValue = event.target.value;
    setIsOpened(fieldValue.length > 0);

    if (selectedOption[optionValue]) {
      fieldValue = '';
      setSelectedOption({});
    }

    setInputValue(fieldValue);
    const searchedOptions = event.target.value.length > 0
      ? options.filter((current) => {
        const found = monitorField.map(
          (currentMonitorField) => !current[currentMonitorField].toString().toLowerCase()
            .indexOf(event.target.value.toLowerCase()),
        );
        return found.includes(true);
      })
      : options;

    setFilteredOptions(searchedOptions);
  }

  function handleClick(option) {
    setSelectedOption(option);
    setInputValue(option[optionValue]);
    setIsOpened(false);
  }

  return (
    <AutocompleteWrapper>
      <TextField
        name={name}
        value={inputValue}
        width={width}
        onChange={handleChange}
        color={color}
        {...props}
      />
      {isOpened && (
        <AutocompleteWrapper.Options color="main">
          {filteredOptions.map((current) => (
            <AutocompleteWrapper.Option
              key={current[optionValue]}
              onClick={() => handleClick(current)}
            >
              {current.text}
            </AutocompleteWrapper.Option>
          ))}
        </AutocompleteWrapper.Options>
      )}
    </AutocompleteWrapper>
  );
}

Autocomplete.propTypes = {
  monitorField: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionValue: PropTypes.string.isRequired,
};
