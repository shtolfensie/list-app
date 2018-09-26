import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { normalize, schema, arrayOf } from "normalizr";

import "../css/ListContainer.css";

import { deleteList, getLists } from "../actions/listActions";
import { addItem, doneItem } from "../actions/itemActions";

import List from "./List";

// const fakeList = {
//   name: "fake",
//   id: "123",
//   items: [
//     {
//       id: "321",
//       name: "fake item"
//     },
//     {
//       id: "456",
//       name: "fake item no.2"
//     }
//   ]
// };

// const item = new schema.Entity("items");
// const list = new schema.Entity("lists", {
//   items: [item]
// });
// const listArr = new schema.Entity("listArr", {
//   listArr: [list]
// });

class ListContainer extends Component {
  componentDidMount() {
    // console.log(this.props.lists);
    // console.log(normalize(this.props.lists, [list]));
    // console.log(this.props.lists);
    // this.setState({
    //   data: normalize(this.props.lists, lists)
    // });
    this.props.getLists();
  }

  // componentDidUpdate() {
  //   console.log(normalize(this.props.lists, [list]));
  // }

  handleItemAdd = (itemName, listId) => {
    this.props.addItem(itemName, listId);
  };
  handleListDelte = listId => {
    this.props.deleteList(listId);
  };
  handleDoneItem = (itemId, listId) => {
    this.props.doneItem(itemId, listId);
  };
  render() {
    const { byId, allIds, items } = this.props;

    return (
      <div className="container">
        {allIds.map((listId, i) => (
          <List
            list={byId[listId]}
            items={byId[listId].items.map(itemId => items[itemId])}
            key={i}
            addItem={this.handleItemAdd}
            deleteList={this.handleListDelte}
            doneItem={this.handleDoneItem}
          />
        ))}
      </div>
    );
  }
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  byId: state.lists.byId,
  allIds: state.lists.allIds,
  items: state.items.byId
});

const mapActionsToProps = {
  addItem,
  deleteList,
  doneItem,
  getLists
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ListContainer);
