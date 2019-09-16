import React from 'react';
import './App.css';
import Tabs from './components/tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    activetab: 0,
  };

  handleTabSelect = (index) => {
    this.setState({ activetab: index });
  };

  render() {
    const { tabs, activetab } = this.state;

    return (
      <div className="App">
        <h1>
          {tabs.length}
          {' '}
tabs
        </h1>
        <Tabs
          tabs={tabs}
          handleTabSelect={this.handleTabSelect}
          activeTab={activetab}
        />
      </div>
    );
  }
}

export default App;