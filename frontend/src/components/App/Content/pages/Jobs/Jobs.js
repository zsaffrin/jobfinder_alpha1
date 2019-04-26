import React from 'react';
import styled from 'styled-components';

import LiveJobs from './LiveJobs';
import UserJobs from './UserJobs';

const Jobs = () => {
  const JobsPage = styled.div(({ theme }) => {
    const { space } = theme;
    return `
      display: grid;
      grid-gap: ${space.lg};
    `;
  });

  return (
    <JobsPage>
      <LiveJobs />
      <UserJobs />
    </JobsPage>
  );
};

export default Jobs;
