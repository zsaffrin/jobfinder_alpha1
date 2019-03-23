import React, { Component } from 'react';

const groupByKey = (data, key, groupTitle, groupItemsKey) =>
  data.reduce((acc, entry) => {
    acc.some(i => i[groupTitle] === entry[key])
      ? acc.forEach(i => {
          if (i[groupTitle] === entry[key]) {
            i[groupItemsKey].push(entry);
          }
        })
      : acc.push({
          [groupTitle]: entry[key],
          [groupItemsKey]: [entry],
        });

    return acc;
  }, []);

class App extends Component {
  state = {
    loadingJobs: false,
    jobs: [],
  };

  componentDidMount() {
    this.loadJobs();
  }

  async loadJobs() {
    this.setState({ loadingJobs: true });
    return await fetch('http://localhost:4382/alljobs')
      .then(async res => {
        const jobs = await res.json();
        const sortedJobs = groupByKey(jobs, 'company', 'company', 'jobs').sort(
          (a, b) => (a.company.toUpperCase() > b.company.toUpperCase() ? 1 : -1)
        );
        this.setState({
          loadingJobs: false,
          jobs: sortedJobs,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        <h1>JobFinder</h1>
        {jobs.map(i => (
          <div key={i.company}>
            <b>{i.company}</b>
            <ul>
              {i.jobs.map(job => (
                <li key={job.uniqueId}>{job.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
