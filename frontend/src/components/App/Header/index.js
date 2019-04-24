import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const Header = () => {
  const StyledHeader = styled.header(({ theme }) => {
    const { color, space } = theme;
    return `
      background: ${color.primary};
      color: ${color.white};
      padding: ${space.thin} ${space.sm};
    `;
  });

  return (
    <StyledHeader>
      <Title />
    </StyledHeader>
  );
};

export default Header;
