import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const Header = () => {
  const StyledHeader = styled.header(({ theme }) => {
    const { color, space } = theme;
    return `
      background: ${color.primary};
      color: ${color.white};
      padding: ${space.sm} ${space.md};
    `;
  });

  return (
    <StyledHeader>
      <Title />
    </StyledHeader>
  );
};

export default Header;
