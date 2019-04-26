import React, { Component } from 'react';
import styled from 'styled-components';

import JobsSummary from './JobsSummary';
import List from './List';

class JobList extends Component {
  state = {
    jobs: [],
    loadingJobs: false,
    sources: {}
  };

  componentDidMount() {
    this.loadJobs();
  }

  async loadJobs() {
    this.setState({ loadingJobs: true });
    return await fetch('http://localhost:4382/api/jobs')
      .then(async res => {
        const { jobs, sources } = await res.json();
        this.setState({
          jobs,
          sources,
          loadingJobs: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { jobs, loadingJobs, sources } = this.state;

    const JobListPage = styled.div(({ theme }) => {
      const { space } = theme;
      return `
      display: grid;
      grid-gap: ${space.md};
    `;
    });

    return (
      <JobListPage>
        <JobsSummary jobs={jobs} loadingJobs={loadingJobs} sources={sources} />
        <List items={jobs} />
      </JobListPage>
    );
  }
}

export default JobList;
