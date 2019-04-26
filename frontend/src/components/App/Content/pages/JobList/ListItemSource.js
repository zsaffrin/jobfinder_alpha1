import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItemSource = ({ source }) => {
  let icon = source[0];
  if (source === 'codepen')
    icon = <FontAwesomeIcon icon={['fab', 'codepen']} />;
  if (source === 'workingNomads')
    icon = <FontAwesomeIcon icon={['fas', 'bicycle']} />;

  const StyledDiv = styled.div`
    grid-area: source;
    display: grid;
    align-items: end;
  `;

  return <StyledDiv title={source}>{icon}</StyledDiv>;
};

export default ListItemSource;
