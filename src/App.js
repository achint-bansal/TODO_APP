import React, { Component } from "react";
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

  addItem(input, e) {
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

  deleteItem(itemKey) {
    const list = Object.assign([], this.state.list);
    list.splice(itemKey, 1);
    this.setState({ list: list });
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
              onClick={(e) => this.addItem(this.state.inputItem, e)}
            >
              Add
            </button>
          </form>
        </div>
        <ul>
          {this.state.list.map((item, i) => (
            <li key={i}>
              {item}
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => this.deleteItem(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
