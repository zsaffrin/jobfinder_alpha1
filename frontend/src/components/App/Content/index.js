import React from 'react';
import styled from 'styled-components';

const Content = ({ jobs, loadingJobs, sources }) => {
  const ContentSection = styled.main(({ theme }) => {
    const { space } = theme;
    return `
      padding: ${space.md};
    `;
  });

  return (
    <ContentSection>
      {loadingJobs
        ? '⌛'
        : `Loaded ${jobs.length} jobs from ${
            Object.keys(sources).length
          } sources`}
    </ContentSection>
  );
};

export default Content;
