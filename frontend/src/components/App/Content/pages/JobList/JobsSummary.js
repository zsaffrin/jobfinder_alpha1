import React from 'react';

const JobsSummary = ({ jobs, loadingJobs, sources }) => {
  return (
    <div>
      <strong>
        {loadingJobs
          ? '⌛'
          : `Loaded ${jobs.length} jobs from ${
              Object.keys(sources).length
            } sources`}
      </strong>
    </div>
  );
};

export default JobsSummary;
