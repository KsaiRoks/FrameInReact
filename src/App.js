import React from 'react';
import Header from './components/Header/Header';
import Essay from './components/Essay/Essay';
import Target from './components/Target/Target';
import Game from './components/Game/Game';
import Calc from './components/Calc/Calc';
import Graph2D from './components/Graph2D/Graph2D';
import Graph3D from './components/Graph3D/Graph3D';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Graph3D'
    };
  }

  setPageName(name) {
    this.setState({ pageName: name });
  }

  render() {
    return (<>
    <Header setPageName={(name) => this.setPageName(name)} />
    {this.state.pageName === 'Essay' && <Essay/>}
    {this.state.pageName === 'Target' && <Target/>}
    {this.state.pageName === 'Game' && <Game/>}
    {this.state.pageName === 'Calc' && <Calc/>}
    {this.state.pageName === 'Graph2D' && <Graph2D/>}
    {this.state.pageName === 'Graph3D' && <Graph3D/>}
    </>)
  }
}

export default App;