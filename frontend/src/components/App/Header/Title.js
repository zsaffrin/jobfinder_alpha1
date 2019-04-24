import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Title = () => {
  const StyledLink = styled(Link)(({ theme }) => {
    const { colors } = theme;
    return `
    color: inherit;  
    text-decoration: none;
    `;
  });
  const StyledHeading = styled.h1`
    font-size: 1.25em;
    text-transform: uppercase;
  `;

  return (
    <StyledLink to="/jobs">
      <StyledHeading>Jobfinder</StyledHeading>
    </StyledLink>
  );
};

export default Title;
