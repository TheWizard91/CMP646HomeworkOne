// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import axios from 'axios';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const list = [
  {
    "id":1,
    "my_name":"Emmanuel Kofi Agyapong",
    "body":"Nice to meet ya Professor Flowers."
  }
]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // print_name: []
      list
  };

  }

  // componentDidMount() {
  //   this.getName();
  // }

  // getName() {
  //   axios
  //   .get("http://127.0.0.1:8000/api/")
  //   .then(res => {
  //     this.setState({ print_name: res.data });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.my_name}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
