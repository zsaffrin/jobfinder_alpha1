import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'firebase/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { jobfinderTheme } from '../../themes';

import Header from './Header/Header';
import Content from './Content/Content';

library.add(faGoogle, faSpinner);

const App = () => {
  const AppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  `;

  return (
    <ThemeProvider theme={jobfinderTheme}>
      <AppLayout>
        <Header />
        <Content />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
