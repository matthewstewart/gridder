import React, { Component } from 'react';
import './GridListPage.css';
import Auth from '../modules/Auth';
import axios from 'axios';

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
        grids: res.data.grids
      });
    });    
  } 

  componentDidMount() {
    this.fetchGrids();
  }

  render() {
    return (
      <div className="GridListPage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            Grid List<br/>
            <small>
              Goes Here
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default GridListPage;
