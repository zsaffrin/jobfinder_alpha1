import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import Home from './pages/Home';
import Login from './pages/Login/Login';

const Content = () => {
  const ContentSection = styled.main(({ theme }) => {
    const { space } = theme;
    return `
      display: grid;
      padding: ${space.md};
    `;
  });

  return (
    <ContentSection>
      <Router>
        <Login path="/login" />
        <Home path="/" default />
      </Router>
    </ContentSection>
  );
};

export default Content;
