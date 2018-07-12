import React, { Component } from 'react';
import './GridListPage.css';
import Auth from '../modules/Auth';
import axios from 'axios';
import shortid from 'shortid';

class GridListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grids: []
    };
    this.fetchGrids = this.fetchGrids.bind(this);
  }

  fetchGrids() {
    let config = {
        'headers': {
          'authorization': `Bearer ${Auth.getToken()}`,
        }
    };
    //console.log(config);
    axios.get('https://api.omniuncommons.org/grids', config)
    .then(res => {
      console.log('API Response:');
      console.log(res.data);
      this.setState({
        grids: res.data.record
      });
    });    
  } 

  componentDidMount() {
    this.fetchGrids();
  }

  render() {
    let columns, rows, gridListPageStyles;
    let gridCount = this.state.grids ? this.state.grids.length : 0;
    if(this.state.grids){
      columns = rows = (Math.floor(Math.sqrt(gridCount))) + 1;
      gridListPageStyles = {
        'display': 'grid',
        'gridTemplateRows': `repeat(${parseInt(rows, 10)}, 1fr)`,
        'gridTemplateColumns': `repeat(${parseInt(columns, 10)}, 1fr)`, 
      };
    } else {
      columns = rows = 1;
      gridListPageStyles = {
        'display': 'grid',
        'gridTemplateRows': `1fr`,
        'gridTemplateColumns': `1fr`, 
      };      
    }
    let grids = this.state.grids.map((grid, index) => {
      let gridItemStyles = {
        'display': 'grid',
        'gridTemplateRows': `repeat(${parseInt(grid.rows, 10) + 1}, 1fr)`,
        'gridTemplateColumns': `repeat(${parseInt(grid.columns, 10)}, 1fr)`,         
      };
      let gridItemTitleStyles = {
        'alignSelf': 'center',
        'justifySelf': 'center',
        'gridColumn': `1 / span ${parseInt(grid.columns, 10)}`,
        'gridRow': '1 / 2',
        'padding': '12px'
      };
      let gridChildren = new Array(parseInt(grid.rows, 10) * parseInt(grid.columns, 10));
      for(let i = 0; i < gridChildren.length; i++){
        gridChildren[i] = (
          <div className="grid-item" key={shortid.generate()}></div>
        );
      }
      return (
        <div className="grid-item" key={shortid.generate()} style={gridItemStyles}>
          <div className="grid-item-container" style={gridItemTitleStyles}>
            <h4 className="grid-title">
              {grid.name}
            </h4>
          </div>
          {gridChildren}
        </div>   
      );
    });
    let titleGridItemStyles = {
      'gridColumn': `1 / span ${columns}`,
      'gridRow': '1 / 2',
      'padding': '12px'
    };
    return (
      <div className="GridListPage bg-2" style={gridListPageStyles}>
        <div className="grid-item" style={titleGridItemStyles}>
          <div className="grid-item-container">
            <div className="page-title">
              Grid List
            </div>
          </div>
        </div>
        {grids}
      </div>
    );
  }
}

export default GridListPage;
