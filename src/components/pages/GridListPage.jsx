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
    if(this.state.grids){
      let gridCount = this.state.grids.length;
      columns = rows = (Math.floor(Math.sqrt(gridCount))) + 1;
      gridListPageStyles = {
        'display': 'grid',
        'gridTemplateRows': `repeat(${rows}, 1fr)`,
        'gridTemplateColumns': `repeat(${columns}, 1fr)`, 
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
      return (
        <div className="grid-item" key={shortid.generate()}>
          <div className="grid-item-container">
            <h4 className="grid-title">
              {grid.name}
            </h4>
            <p className="grid-description">{grid.description}</p>
          </div>
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
