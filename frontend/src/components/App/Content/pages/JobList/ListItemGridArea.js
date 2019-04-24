import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ListItemGridArea = ({ area, data }) => {
  const StyledDiv = styled.div`
    grid-area: ${area};
  `;

  return <StyledDiv>{data}</StyledDiv>;
};
ListItemGridArea.propTypes = {
  field: string
};
ListItemGridArea.defaultProps = {
  field: ''
};

export default ListItemGridArea;
