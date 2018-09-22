import React from "react";
import "../css/List.css";

export default ({ list, addItem }) => {
  const listItems = list.items
    ? list.items.map((item, i) => (
        <li key={i}>
          <span>{item.name}</span>
        </li>
      ))
    : null;

  return (
    <div className="list">
      <h1 className="header">{list.name}</h1>
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
            <input name="itemValue" autoComplete="off" />
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
