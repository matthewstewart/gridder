import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './LandingPage.css';

import GridContainer from '../GridContainer';
import GridContainerForm from '../GridContainerForm';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: {
        rows: null,
        columns: null
      }
    };
    this.updateGrid = this.updateGrid.bind(this);
  }

  updateGrid(grid) {
    this.setState({ grid });
  }

  render() {
    return (
      <div className="LandingPage">
        <GridContainerForm 
          grid={this.state.grid}
          updateGrid={this.updateGrid}
        />
        <div className="grid-panel">
          <GridContainer 
            columns={this.state.grid.columns || 1}
            rows={this.state.grid.rows || 1}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
