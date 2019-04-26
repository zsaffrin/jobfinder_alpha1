import React from 'react';
import styled from 'styled-components';
import { useFirebaseAuth } from '../../../../../utils';

import LiveJobs from './LiveJobs';
import UserJobs from './UserJobs';
import SystemJobs from './SystemJobs';

const Jobs = () => {
  const { initialising, isAuthed, user } = useFirebaseAuth();

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
      {!initialising && isAuthed && <UserJobs user={user} />}
      <SystemJobs />
    </JobsPage>
  );
};

export default Jobs;
