import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import Content from './Content';

import { jobfinderTheme } from '../../themes';

class App extends Component {
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

    const StyledApp = styled.div`
      display: grid;
      grid-template-rows: auto 1fr;
      height: 100vh;
    `;

    return (
      <ThemeProvider theme={jobfinderTheme}>
        <StyledApp>
          <Header />
          <Content jobs={jobs} loadingJobs={loadingJobs} sources={sources} />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
