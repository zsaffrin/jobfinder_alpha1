import React from 'react';
import styled from 'styled-components';

import JobsSummary from './JobsSummary';
import List from './List';

const JobList = ({ jobs, loadingJobs, sources }) => {
  const JobListPage = styled.div(({ theme }) => {
    const { space } = theme;
    return `
      display: grid;
      grid-gap: ${space.md};
    `;
  });

  return (
    <JobListPage>
      <JobsSummary jobs={jobs} loadingJobs={loadingJobs} sources={sources} />
      <List items={jobs} />
    </JobListPage>
  );
};

export default JobList;
