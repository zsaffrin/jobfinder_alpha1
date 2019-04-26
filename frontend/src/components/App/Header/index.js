import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Identity from './Identity';

const Header = () => {
  const StyledHeader = styled.header(({ theme }) => {
    const { color } = theme;
    return `
      background: ${color.primary};
      color: ${color.white};
      display: grid;
      grid-template-columns: 1fr auto;
    `;
  });

  return (
    <StyledHeader>
      <Title />
      <Identity />
    </StyledHeader>
  );
};

export default Header;
