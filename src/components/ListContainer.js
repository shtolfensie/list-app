import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../css/ListContainer.css";

import { addItem } from "../actions/listActions";

import List from "./List";

class ListContainer extends Component {
  handleItemAdd = (newItem, listId) => {
    this.props.addItem(newItem, listId);
  };
  render() {
    const { lists } = this.props;

    return (
      <div className="container">
        {lists.map((list, i) => (
          <List list={list} key={i} addItem={this.handleItemAdd} />
        ))}
      </div>
    );
  }
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

const mapActionsToProps = {
  addItem
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ListContainer);
