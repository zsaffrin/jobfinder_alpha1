import React from 'react';
import styled from 'styled-components';

const ListItemSource = ({ source }) => {
  let icon = source[0];
  if (source === 'codepen') icon = '🖋️';
  if (source === 'workingNomads') icon = '🚴';

  const StyledDiv = styled.div`
    grid-area: source;
    display: grid;
    align-items: end;
  `;

  return <StyledDiv>{icon}</StyledDiv>;
};

export default ListItemSource;
