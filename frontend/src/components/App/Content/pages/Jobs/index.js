import React, { useState } from 'react';
import { loadJobs } from '../../../../../utils/jobUtils';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserJobs from './UserJobs';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sources, setSources] = useState({});
  const [loadingJobs, setloadingJobs] = useState(false);

  const refreshJobs = () => {
    setloadingJobs(true);
    loadJobs()
      .then(res => {
        setJobs(res.jobs);
        setSources(res.sources);
        setloadingJobs(false);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  let externalJobs = 'No jobs loaded';
  if (loadingJobs) {
    externalJobs = <FontAwesomeIcon icon={['fas', 'bicycle']} />;
  } else if (jobs.length > 0) {
    externalJobs = `${jobs.length} jobs loaded from ${
      Object.keys(sources).length
    } sources`;
  }

  return (
    <div>
      <div>{externalJobs}</div>
      <div>
        <button type="button" onClick={refreshJobs}>
          Refresh Jobs
        </button>
      </div>
      <div>
        <FirebaseAuthConsumer>
          {({ user }) => <UserJobs user={user} />}
        </FirebaseAuthConsumer>
      </div>
    </div>
  );
};

export default Jobs;
