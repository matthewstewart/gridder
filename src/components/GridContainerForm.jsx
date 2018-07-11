import React, { Component } from 'react';

import axios from 'axios';

import Auth from './modules/Auth';
//import { Link } from 'react-router-dom';

class GridContainerForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        description: '',
        rows: 1,
        columns: 1     
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formData) {
    let config = {
      'headers': {
        'authorization': `Bearer ${Auth.getToken()}`,
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
      'json': true
    };  
    axios.post('https://api.omniuncommons.org/grids/new', formData, config)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    });  
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let formData = this.state.form;
    this.setState({
      form: {
        name: '',
        description: '',
        rows: '',
        columns: ''        
      }
    });
    this.submitForm(formData);
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
      <form onSubmit={this.handleFormSubmit}>
        <div className="field">
          <h3 className="is-size-3">New Grid</h3>
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input" 
              name="name"
              type="text" 
              placeholder="Grid Name"
              value={this.state.form.name}
              onChange={this.onInputChange} 
            />
          </div>
          <p className="help">Select A Name For This Grid</p>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea 
              className="input" 
              name="description"
              rows="2" 
              placeholder="A short description of the Grid."
              value={this.state.form.description}
              onChange={this.onInputChange} 
            ></textarea>
          </div>
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
        <div className="field">
          <button 
            className="button is-success"
            type="submit"
          >Save</button>
        </div>
      </form>
    );
  }
}

export default GridContainerForm;
