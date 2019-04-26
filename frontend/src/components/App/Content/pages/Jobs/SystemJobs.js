import React, { useState, useEffect } from 'react';
import { db } from '../../../../../firebase';
import LoadingIcon from '../../../../shared/LoadingIcon';

const SystemJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  useEffect(() => {
    setLoadingJobs(true);
    const sysjobsRef = db.collection('jobs');

    const unsubscribe = sysjobsRef.onSnapshot(data => {
      let sysjobsRecords = [];
      data.forEach(doc => sysjobsRecords.push(doc.data()));
      setJobs(sysjobsRecords);
      setLoadingJobs(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>{loadingJobs ? <LoadingIcon /> : `${jobs.length} System Jobs`}</div>
  );
};

export default SystemJobs;
