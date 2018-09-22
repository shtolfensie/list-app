import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/AddList.css";

import { connect } from "react-redux";

import { addList } from "../actions/listActions";

const initialState = {
  listName: "",
  listNameDisabled: false,
  class: ""
};

class AddList extends Component {
  state = initialState;

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddList = e => {
    e.preventDefault();
    this.props.addList({ name: this.state.listName });
    this.setState(initialState);
  };

  handleOpen = () => {
    if (!this.state.class) {
      this.listNameInput.focus();
    } else {
      this.setState({ listNameDisabled: true, listName: "" });
      setTimeout(() => {
        this.setState({ listNameDisabled: false });
      }, 500);
    }
    this.setState({ class: !this.state.class ? "open" : "" });
  };

  render() {
    return (
      <div>
        <div className={`main-wrapper ${this.state.class}`}>
          <div className="main-body">
            <h3>Create a new list</h3>
            <form onSubmit={this.onAddList}>
              <div className="bullet" />
              <input
                name="listName"
                required
                disabled={this.state.listNameDisabled}
                autoComplete="off"
                ref={input => {
                  this.listNameInput = input;
                }}
                value={this.state.listName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="listName" className="name-label">
                Add a name for your list
              </label>
              <button
                onClick={this.onAddList}
                disabled={this.state.listName === "" ? true : false}
              >
                Add
              </button>
            </form>
          </div>
          <div className="collapse-btn" onClick={this.handleOpen}>
            <span className="up-arrow">/\</span>
            <p>Add List</p>
          </div>
        </div>
        {this.state.class ? (
          <div className="background-courtain" onClick={this.handleOpen} />
        ) : null}
      </div>
    );
  }
}

AddList.proptypes = {
  lists: PropTypes.array,
  addList: PropTypes.func
};

const mapStateToProps = state => ({
  // lists: state.lists
});

const mapActionsToProps = {
  addList
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddList);
