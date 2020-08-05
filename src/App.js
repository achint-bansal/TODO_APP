import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        inputItem: "",
        key: "",
      },
      list: [],
    };
  }

  changeInput(input) {
    this.setState({
      item: {
        inputItem: input,
        key: Date.now(),
      },
    });
    console.log(this.state.item.key);
  }

  addItem(input, e) {
    e.preventDefault();
    if (input) {
      // let listArray = this.state.list;
      // listArray.push(input);
      const newItem = this.state.item;
      if (newItem.text !== "") {
        const list = [...this.state.list, newItem];
        this.setState({
          list: list,
          item: {
            inputItem: "",
            key: "",
          },
        });
      }
    }
  }

  deleteItem(itemKey) {
    const list = Object.assign([], this.state.list);
    list.splice(itemKey, 1);
    this.setState({ list: list });
  }
  updateItem(updatedInput, i) {
    // console.log("key is "+i);
    const list = this.state.list;
    list.map((current) => {
      if (current.key === i) {
        console.log(current.key);
        current.inputItem = updatedInput;
      }
    });
    this.setState({
      list: list,
    });
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-inputbar">
          <form>
            <input
              value={this.state.item.inputItem}
              placeholder=" + Add Item"
              type="text"
              onChange={(e) => this.changeInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => this.addItem(this.state.item.inputItem, e)}
            >
              Add
            </button>
          </form>
        </div>
        <ul className="updateInput">
          {this.state.list.map((item, i) => (
            <li key={item.key}>
              {/* {item} */}
              <input
                type="text"
                value={item.inputItem}
                onChange={(e) => this.updateItem(e.target.value, item.key)}
              />
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
