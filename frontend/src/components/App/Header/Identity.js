import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Identity = () => {
  const IdentityDiv = styled.div(({ theme }) => {
    const { colors } = theme;
    return `
      display: grid;
      align-items: center;

      &:hover {
        background: ${colors.blue[3]};
        color: ${colors.blue[5]};
      }
    `;
  });
  const StyledLink = styled(Link)(({ theme }) => {
    const { colors, space } = theme;
    return `
      color: inherit;  
      padding: ${space.sm} ${space.md};
      text-decoration: none;

      &:hover {
        color: ${colors.blue[5]};
      }
    `;
  });

  return (
    <IdentityDiv>
      <StyledLink to="/login">Login</StyledLink>
    </IdentityDiv>
  );
};

export default Identity;
