import React from 'react';
import styled from 'styled-components';

const ListItemTitle = ({ title }) => {
  const StyledTitle = styled.div(({ theme }) => {
    const { font } = theme;
    return `
      font-weight: ${font.weight.body.bold};
      grid-area: title;
    `;
  });
  return <StyledTitle>{title}</StyledTitle>;
};

export default ListItemTitle;
