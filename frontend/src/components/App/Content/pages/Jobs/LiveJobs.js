import React, { useState } from 'react';
import { loadJobs, useSystemJobs } from '../../../../../utils';
import LoadingIcon from '../../../../shared/LoadingIcon';

const LiveJobs = ({ user }) => {
  const [isLoadingLiveJobs, setIsLoadingLiveJobs] = useState(false);
  const [liveJobs, setLiveJobs] = useState([]);

  const { jobs: systemJobs } = useSystemJobs();

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

  const recognizedJobs = liveJobs.filter(
    job =>
      systemJobs.filter(sysJob => job.uniqueId === sysJob.uniqueId).length > 0
  );
  console.info(recognizedJobs);

  return (
    <div>
      {isLoadingLiveJobs ? (
        <div>
          <LoadingIcon />
        </div>
      ) : (
        <div>
          {liveJobs.length > 0
            ? `${liveJobs.length} jobs loaded. ${
                recognizedJobs.length
              } recognized`
            : 'No live jobs loaded'}
        </div>
      )}

      <div>
        <button onClick={refreshLiveJobs}>Refresh Live Jobs</button>
      </div>
    </div>
  );
};

export default LiveJobs;
