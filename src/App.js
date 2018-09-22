import React, { Component } from "react";

import Navbar from "./components/Navbar";
import AddList from "./components/AddList";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar avatarUrl="https://lh3.googleusercontent.com/--5OsSwuhVwc/AAAAAAAAAAI/AAAAAAAAAAA/AAN31DUODei6jLF_w1IM29S94XDRYKUFvQ/s96-c-mo/photo.jpg" />
        <AddList />
        <ListContainer />
      </div>
    );
  }
}

export default App;
