import React, { useEffect, useState } from 'react';
import { db } from '../../../../../firebase';

const UserJobs = ({ user }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const userjobsRef = db.collection('userjobs').where('uid', '==', user.uid);

    userjobsRef.onSnapshot(data => {
      let userjobsRecords = [];
      data.forEach(doc => userjobsRecords.push(doc.data()));
      if (userjobsRecords.length > 0) setJobs(userjobsRecords[0].jobs);
    });
  });

  return <pre>{JSON.stringify(jobs, ' ', 2)}</pre>;
};

export default UserJobs;
