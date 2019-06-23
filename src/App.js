import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnumber: 0,
      secondnumber: 0,
      operator: "",
      result: 0
    };
    this.firstnumaction = this.firstnumaction.bind(this);
    this.secondnumaction = this.secondnumaction.bind(this);
    this.operatoraction = this.operatoraction.bind(this);
  }
  firstnumaction(evt) {
    this.setState({ firstnumber: Number(evt.target.value) });
  }
  secondnumaction(evt) {
    this.setState({ secondnumber: Number(evt.target.value) });
  }
  operatoraction(evt) {
    this.setState({ operator: evt.target.value });
  }

  ExecuteAction = event => {
    let z = null;
    if (this.state.operator === "+") {
      z = this.state.firstnumber + this.state.secondnumber;
    }
    if (this.state.operator === "-") {
      z = this.state.firstnumber - this.state.secondnumber;
    }
    if (this.state.operator === "/") {
      z = this.state.firstnumber / this.state.secondnumber;
    }
    if (this.state.operator === "*") {
      z = this.state.firstnumber * this.state.secondnumber;
    }
    this.setState({ result: z });
  };
  render() {
    return (
      <form>
        <label>
          <div>
            Number 1 : <input type="text" onChange={this.firstnumaction} />
          </div>
          <br />
          <div>
            Number 2 : <input type="text" onChange={this.secondnumaction} />
          </div>
          <br />
          <div>
            <select onChange={this.operatoraction}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <br />
            <br />
          </div>
          <input type="button" onClick={this.ExecuteAction} value="Execute" />
          <div />
          <br />
          <input type="text" value={this.state.result} readOnly />
        </label>
      </form>
    );
  }
}

export default App;
