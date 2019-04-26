import React, { useState } from 'react';
import { loadJobs } from '../../../../../utils';
import LoadingIcon from '../../../../shared/LoadingIcon';

const LiveJobs = () => {
  const [isLoadingLiveJobs, setIsLoadingLiveJobs] = useState(false);
  const [liveJobs, setLiveJobs] = useState([]);

  const refreshLiveJobs = () => {
    setIsLoadingLiveJobs(true);
    loadJobs()
      .then(res => {
        setLiveJobs(res);
        setIsLoadingLiveJobs(false);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  return (
    <div>
      {isLoadingLiveJobs ? (
        <div>
          <LoadingIcon />
        </div>
      ) : (
        <div>
          {liveJobs.length > 0 ? liveJobs.length : 'No'} live jobs loaded
        </div>
      )}

      <div>
        <button onClick={refreshLiveJobs}>Refresh Live Jobs</button>
      </div>
    </div>
  );
};

export default LiveJobs;
