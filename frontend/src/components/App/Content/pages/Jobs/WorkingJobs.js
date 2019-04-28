import React from 'react';
import { useFirebaseAuth } from '../../../../../utils';
import { useSystemJobs, useUserJobs } from '../../../../../utils';

const WorkingJobs = () => {
  const { user } = useFirebaseAuth();
  const { loadingJobs: loadingUserJobs, jobs: userJobs } = useUserJobs(
    user ? user.uid : 0
  );
  const { loadingJobs: loadingSystemJobs, jobs: systemJobs } = useSystemJobs();

  return (
    <>
      <div>UserJobs: {loadingUserJobs ? 'Loading' : userJobs.length}</div>
      <div>SystemJobs: {loadingSystemJobs ? 'Loading' : systemJobs.length}</div>
    </>
  );
};

export default WorkingJobs;
