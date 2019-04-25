import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

import Login from './pages/Login';
import JobList from './pages/JobList';

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
          <Router>
            {isSignedIn ? <JobList path="/" /> : <Login path="/" />}
          </Router>
        )}
      </FirebaseAuthConsumer>
    </ContentSection>
  );
};

export default Content;
