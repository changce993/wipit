import React, { useState } from 'react';
import { Label, Text, Div } from 'components/Atoms';
import { Container, Options } from './styled';
import { optionProps } from './styledProps';
import { ReactComponent as SelectOption } from 'assets/icons/selectOption.svg';

const Dropdown = ({ children, label, options = [], setOption, option, width, ...props }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onClick = e => {
    setIsOpen(false);
    setOption(e);
  };

  return (
    <Div position='relative'>
      {label && <Label>{label}</Label>}

      <Container {...props} onClick={() => setIsOpen(!isOpen)} width={width}>
        <Text selection='transparent' color='lightBlack'>{option || children || 'Select'}</Text>
        <SelectOption height='12px' width='8px'/>
      </Container>

      {isOpen && (
        <Options width={width}>
          {options.length > 0 ? (
            options.map((opt, index) => {
              return (
                <Text {...optionProps} onClick={() => onClick(opt)} key={index}>
                  {opt.name}
                </Text>
              )
            })
          ) : <Text {...optionProps} onClick={() => setIsOpen(false)}>No hay opciones</Text>}
        </Options>
      )}
    </Div>
  )
};

export default Dropdown;
