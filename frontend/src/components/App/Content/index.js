import React from 'react';
import styled from 'styled-components';

import JobList from './JobList';

const Content = ({ jobs, loadingJobs, sources }) => {
  const ContentSection = styled.main(({ theme }) => {
    const { space } = theme;
    return `
      padding: ${space.md};
    `;
  });

  return (
    <ContentSection>
      <div>
        <strong>
          {loadingJobs
            ? '⌛'
            : `Loaded ${jobs.length} jobs from ${
                Object.keys(sources).length
              } sources`}
        </strong>
      </div>
      <JobList jobs={jobs} />
    </ContentSection>
  );
};

export default Content;
