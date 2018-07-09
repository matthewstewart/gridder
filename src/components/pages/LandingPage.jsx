import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './LandingPage.css';

import GridContainer from '../GridContainer';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: {
        rows: null,
        columns: null
      },
      gridForm: {
        rows: 1,
        columns: 1
      }
    };
    this.updateGrid = this.updateGrid.bind(this);
  }

  updateGrid(e) {
    let grid = this.state.grid;
    let gridForm = this.state.gridForm;
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    grid[fieldName] = fieldValue;
    gridForm[fieldName] = fieldValue;
    this.setState({ grid, gridForm });
  }

  render() {
    return (
      <div className="LandingPage">
        <form>
          <div className="field">
            <label className="label">Rows</label>
            <div className="control">
              <input 
                className="input" 
                name="rows"
                type="number" 
                min="1"
                max="25"
                step="1"
                value={this.state.gridForm.rows}
                onChange={this.updateGrid} 
              />
            </div>
            <p className="help">Select Number Of Rows For The Grid</p>
          </div>        
          <div className="field">
            <label className="label">Columns</label>
            <div className="control">
              <input 
                className="input" 
                name="columns"
                type="number" 
                min="1"
                max="25"
                step="1"
                value={this.state.gridForm.columns}
                onChange={this.updateGrid} 
              />
            </div>
            <p className="help">Select Number Of Columns For The Grid</p>
          </div>
        </form>
        <div className="grid-panel">
          <GridContainer 
            columns={this.state.gridForm.columns}
            rows={this.state.gridForm.rows}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
