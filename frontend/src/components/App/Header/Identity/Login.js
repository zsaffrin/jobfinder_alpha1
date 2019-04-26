import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Login = () => {
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

  return <StyledLink to="/login">Login</StyledLink>;
};

export default Login;
