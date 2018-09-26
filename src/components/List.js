import React from "react";
import "../css/List.css";

export default ({ list, items, addItem, deleteList, doneItem }) => {
  const style = {
    boxShadow: `0.5px 3px 0px rgba(${list.color}, 0.6)`,
    backgroundColor: `rgb(${list.color})`
  };
  const listItems = list.items
    ? items.map((item, i) => {
        return (
          <li key={i}>
            <span
              className={item.done ? "done" : ""}
              onClick={() => doneItem(item.id, list.id)}
            >
              {item.name}
            </span>
          </li>
        );
      })
    : null;

  return (
    <div className={`list`} style={style}>
      <div className="shadow" />
      <div className="header">
        <h1>{list.name}</h1>
        <a onClick={() => deleteList(list.id)}>Delete</a>
      </div>
      <ul>
        {listItems}
        <li>
          <form
            onSubmit={e => {
              e.preventDefault();
              // addItem(this.state.itemValue, list.id);
              addItem(e.target.itemValue.value, list.id);
              e.target.itemValue.value = "";
            }}
          >
            <input autoFocus name="itemValue" autoComplete="off" />
          </form>
        </li>
      </ul>
    </div>
  );
};

// export default class List extends Component {
//   listItems = this.props.list.items
//     ? this.props.list.items.map((item, i) => <li key={i}>{item.name}</li>)
//     : null;

//   state = { itemValue: "" };

//   render() {
//     const { list, addItem } = this.props;
//     return (
//       <div className="list">
//         <h1 className="header">{list.name}</h1>
//         <ul>
//           {this.listItems || null}
//           <li>
//             <form
//               onSubmit={e => {
//                 e.preventDefault();
//                 // addItem(this.state.itemValue, list.id);
//                 addItem(e.target.itemValue.value, list.id);
//               }}
//             >
//               <input
//                 name="itemValue"
//                 onChange={e => this.setState({ itemValue: e.target.value })}
//               />
//             </form>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
