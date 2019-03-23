import React, { Component } from 'react';

class App extends Component {
  state = {
    backendPresent: false,
    checkingBackend: false,
  };

  componentDidMount() {
    this.checkForBackend();
  }

  async checkForBackend() {
    this.setState({ checkingBackend: true });
    return await fetch('http://localhost:4382/alljobs')
      .then(async res => {
        this.setState({
          checkingBackend: false,
          backendPresent: await res.ok,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>JobFinder</h1>
      </div>
    );
  }
}

export default App;
