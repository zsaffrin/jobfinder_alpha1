import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

import Login from './pages/Login';
import Jobs from './pages/Jobs';

const Content = ({ jobs, loadingJobs, sources }) => {
  const ContentSection = styled.main(({ theme }) => {
    const { space } = theme;
    return `
      padding: ${space.md};
    `;
  });

  return (
    <ContentSection>
      <FirebaseAuthConsumer>
        {({ isSignedIn }) => (
          <Router>{isSignedIn ? <Jobs path="/" /> : <Login path="/" />}</Router>
        )}
      </FirebaseAuthConsumer>
    </ContentSection>
  );
};

export default Content;
