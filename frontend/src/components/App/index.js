import React, { Component } from 'react';

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

    return (
      <div>
        <h1>jobfinder</h1>
        <div>
          {loadingJobs
            ? '⌛'
            : `Loaded ${jobs.length} jobs from ${
                Object.keys(sources).length
              } sources`}
        </div>
      </div>
    );
  }
}

export default App;
