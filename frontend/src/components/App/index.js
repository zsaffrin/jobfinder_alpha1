import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBicycle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { firebase, firebaseConfig } from '../../firebase';

import Header from './Header';
import Content from './Content';

import { jobfinderTheme } from '../../themes';

library.add(faBicycle, faCodepen, faGlobe, faGoogle);

const App = () => {
  const StyledApp = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  `;

  return (
    <ThemeProvider theme={jobfinderTheme}>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <StyledApp>
          <Header />
          <Content />
        </StyledApp>
      </FirebaseAuthProvider>
    </ThemeProvider>
  );
};

export default App;
