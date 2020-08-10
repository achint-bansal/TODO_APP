import React, { Component, Fragment } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        inputItem: "",
        key: "",
        edit: "",
        completion: "",
      },
      list: [],
    };
  }

  changeInput(input) {
    this.setState({
      item: {
        inputItem: input,
        key: Date.now(),
        edit: false,
        completion: false,
      },
    });
  }

  addItem(input, e) {
    e.preventDefault();
    if (input) {
      const newItem = this.state.item;
      if (newItem.text !== "") {
        const list = [...this.state.list, newItem];
        this.setState({
          list: list,
          item: {
            inputItem: "",
            key: "",
            edit: "",
            completion: "",
          },
        });
      }
    }
  }
  editItem(i) {
    const list = this.state.list;
    list.map((current) => {
      if (current.key === i) {
        current.edit = !current.edit;
      }
    });
    this.setState({
      list: list,
    });
  }
  deleteItem(itemKey) {
    const list = Object.assign([], this.state.list);
    list.splice(itemKey, 1);
    this.setState({ list: list });
  }
  updateItem(updatedInput, i) {
    const list = this.state.list;
    list.map((current) => {
      if (current.key === i) {
        current.inputItem = updatedInput;
      }
    });
    this.setState({
      list: list,
    });
  }
  alternateColor(i) {
    if (i % 2 === 0) return "#d9d9d9";
    else return "white";
  }
  // itemColorchange = (e,i) => {
  //   if (e.type === "mouseenter") {
  //     e.target.style.background = "#d9d9d9";
  //   }
  //   if (e.type === "mouseleave") {
  //     // e.target.style.background = "white";
  //     // this.alternateColor(i);

  //   }
  // };
  // itemColorchangeInput = (e) => {
  //   if (e.type === "mouseenter") {
  //     e.target.style.background = "transparent";
  //   }
  //   if (e.type === "mouseleave") {
  //     e.target.style.background = "transparent";
  //   }
  // };
  markTask(e, i, item) {
    const list = this.state.list;
    list.map((current) => {
      if (current.key === i) {
        current.completion = !current.completion;
      }
    });
    this.setState({
      list: list,
    });
    list.map((current) => {
      if (current === item) {
        current.completion
          ? (e.target.style.color = "green")
          : (e.target.style.color = "black");
      }
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
            <li
              key={item.key}
              onMouseEnter={this.itemColorchange}
              onMouseLeave={this.itemColorchange}
              style={{ backgroundColor: this.alternateColor(i) }}
            >
              {item.edit ? (
                <Fragment>
                  <input
                    type="text"
                    value={item.inputItem}
                    onChange={(e) => this.updateItem(e.target.value, item.key)}
                    onMouseEnter={this.itemColorchangeInput}
                    onMouseLeave={this.itemColorchangeInput}
                  />
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    onClick={() => this.editItem(item.key)}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <p>{item.inputItem}</p>
                  <div className="listOptions">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => this.editItem(item.key)}
                    />
                    <p
                      className="complete"
                      onClick={(e) => this.markTask(e, item.key, item)}
                    >
                      <b>COMPLETE</b>
                    </p>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={() => this.deleteItem(i)}
                    />
                  </div>
                </Fragment>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
