import React, { useState, useEffect } from 'react';
import { db } from '../../../../../firebase';
import LoadingIcon from '../../../../shared/LoadingIcon';

const UserJobs = ({ user }) => {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  useEffect(() => {
    setLoadingJobs(true);
    const userjobsRef = db.collection('userjobs').where('uid', '==', user.uid);

    const unsubscribe = userjobsRef.onSnapshot(data => {
      let userjobsRecords = [];
      data.forEach(doc => userjobsRecords.push(doc.data()));
      if (userjobsRecords.length > 0) {
        setJobs(userjobsRecords[0].jobs);
        setLoadingJobs(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user.uid]);

  return (
    <div>
      {loadingJobs ? <LoadingIcon /> : `${jobs.length} user job records loaded`}
    </div>
  );
};

export default UserJobs;
