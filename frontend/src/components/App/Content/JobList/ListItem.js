import React from 'react';
import styled from 'styled-components';

import ListItemTitle from './ListItemTitle';
import ListItemSource from './ListItemSource';
import ListItemGridArea from './ListItemGridArea';

const JobListItem = ({ job }) => {
  const { company, location, source, title } = job;

  const ListItem = styled.li(({ theme }) => {
    const { color, space } = theme;
    return `
      border: 1px solid ${color.primary};
      display: grid;
      grid-template-areas: 'title title'
      'company source'
      'location source';
      grid-template-columns: 1fr auto;
      grid-auto-rows: min-content;
      padding: ${space.sm};
    `;
  });

  return (
    <ListItem>
      <ListItemTitle title={title} />
      <ListItemGridArea area="company" data={company} />
      <ListItemSource source={source} />
      <ListItemGridArea area="location" data={location} />
    </ListItem>
  );
};

export default JobListItem;
