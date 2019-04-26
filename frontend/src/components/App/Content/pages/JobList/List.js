import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const List = ({ items }) => {
  const List = styled.ul(({ theme }) => {
    const { space } = theme;
    return `
      display: grid;
      font-size: 12px;
      grid-gap: ${space.md};
      grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
      list-style: none;
      margin: 0;
      padding: 0;
    `;
  });

  return (
    <List>
      {items && items.map(item => <ListItem key={item.uniqueId} job={item} />)}
    </List>
  );
};

export default List;
