import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import shortid from 'shortid';
import './GridContainer.css';

class GridContainer extends Component {
  
  render() {
    let containerStyles = {
      'display': 'grid',
      'gridTemplateColumns': `repeat(${this.props.columns}, 1fr)`,
      'gridTemplateRows': `repeat(${this.props.rows}, 1fr)`
    };
    let gridLength = this.props.rows * this.props.columns;
    let children = [];
    for(let i = 0; i < gridLength; i++){
      children.push(
        <div 
          key={shortid.generate()}
          className="grid-cell"
        ></div>
      );
    }
    return (
      <div className="GridContainer" style={containerStyles}>
        {children}
      </div>
    );
  }
}

export default GridContainer;
