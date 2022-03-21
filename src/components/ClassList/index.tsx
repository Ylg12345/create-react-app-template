import React, { Component } from "react";

interface IProps {
  name: string;
}

interface IState {
  list: number[];
}

class ClassList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
      this.state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
  }

  deleteList = (index: number) => {
    this.setState({
      list: this.state.list.filter((_, i) => {
        return i !== index
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Class组件{this.props.name}</h1>
        <ul>
          {
            this.state.list.map((item: number, index: number) => {
              return (
                <li
                  key={index}
                >
                  <button onClick={() => {this.deleteList(index)}}>删除</button>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default ClassList;
