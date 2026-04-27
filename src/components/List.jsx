// Componeti a Classe

import { Component } from "react"

// Hanno una struttura leggermente diversa
const first = "Latte"
const second = "Caffe"
const third = "Biscotti"

class List extends Component {
  render() {
    // qui dentro ritorniamo il JSX
    return (
      <ul>
        <li>Pane</li>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    )
  }
}

export default List
