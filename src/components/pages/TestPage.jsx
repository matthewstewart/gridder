import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './TestPage.css';


class TestPage extends Component {

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
      <div className="TestPage">
        Test Page
      </div>
    );
  }
}

export default TestPage;
