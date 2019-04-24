import React from 'react';
import styled from 'styled-components';

const Title = () => {
  const StyledHeading = styled.h1`
    font-size: 1.25em;
    text-transform: uppercase;
  `;

  return <StyledHeading>Jobfinder</StyledHeading>;
};

export default Title;
