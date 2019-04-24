import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';

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
      <Router>
        <Login path="/login" />
        <JobList
          path="/jobs"
          jobs={jobs}
          loadingJobs={loadingJobs}
          sources={sources}
        />
      </Router>
    </ContentSection>
  );
};

export default Content;
