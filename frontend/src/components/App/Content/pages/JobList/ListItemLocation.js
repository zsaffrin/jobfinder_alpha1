import React from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItemLocation = ({ location, remote }) => {
  const StyledDiv = styled.div`
    grid-area: location;
  `;

  return (
    <StyledDiv>
      {remote && <FontAwesomeIcon icon={['fas', 'globe']} title="Remote" />}
      {location}
    </StyledDiv>
  );
};
ListItemLocation.propTypes = {
  location: string,
  remote: bool
};
ListItemLocation.defaultProps = {
  location: '',
  remote: false
};

export default ListItemLocation;
