import React from "react";
import styles from './Trylo.module.css';
class Trylo extends React.Component{
  constructor() {
    super();
    this.state = {
      color: 'red'
    };
  }
  handleClick = ()=>{
    this.setState({ color: "Blue" });
  }
  render() {
      return (
        <div className={styles.name}>
          <p>it is a {this.state.color}</p>
          <button type="button" onClick={this.handleClick}>Dipesh Mate</button>
        </div>
      )
    }
}

export default Trylo;