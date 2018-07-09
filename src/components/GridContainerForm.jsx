import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class GridContainerForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      form: {
        rows: 1,
        columns: 1     
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    let form = this.state.form;
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    form[fieldName] = fieldValue;
    form[fieldName] = fieldValue;
    this.setState({ form });
    this.props.updateGrid(form);
  }

  render() {
    return (
      <form>
        <div className="field">
          <h3 className="is-size-3">New Grid</h3>
        </div>
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
              value={this.state.form.rows}
              onChange={this.onInputChange} 
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
              value={this.state.form.columns}
              onChange={this.onInputChange} 
            />
          </div>
          <p className="help">Select Number Of Columns For The Grid</p>
        </div>
      </form>
    );
  }
}

export default GridContainerForm;
