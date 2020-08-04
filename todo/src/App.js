import React, { Component, Fragment } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputItem: "",
      list: [],
    };
  }

  changeInput(input) {
    this.setState({
      inputItem: input,
    });
  }

  itemList(input, e) {
    e.preventDefault();
    if (input) {
      let listArray = this.state.list;
      listArray.push(input);
      this.setState({
        list: listArray,
        inputItem: "",
      });
    }
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-inputbar">
          <form>
            <input
              onChange={(e) => this.changeInput(e.target.value)}
              value={this.state.inputItem}
              placeholder=" + Add Item"
              type="text"
            />
            <button
              type="submit"
              onClick={(e) => this.itemList(this.state.inputItem, e)}
            >
              Add
            </button>
          </form>
        </div>
        <ul>
          {this.state.list.map((items, i) => (
            <li key={i}>
              {items}
              <FontAwesomeIcon icon={faTrashAlt} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
