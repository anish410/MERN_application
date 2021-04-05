import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import DynamicForm from './components/Dynamic.Form';

class App extends Component{
  state = {
    data: [
      {id: 1, Accountheadname:"a", Accounttype: Nominalaccount},
      {id: 2, Accountheadname:"b", Accounttype: personalaccount},
      {id: 3, Accountheadname:"c", Accounttype: Realaccount}

    ]
  }
  onSubmit = (model) => {
    model.id = +new Date();
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    })
  }
  render(){
    return(
      <div className="App">
        <DynamicForm className = "form"
        title = "Accounts Details"
        model={[
          {key: "Account Head Name", label: "Name", props: {required: true}},
          {key: "Account Type", label: "Account Type", type: "text"},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
        />
        <pre style={{width:"300px"}}>
          {JSON.stringify(this.state.data)}
        </pre>

        </div>
    );
  }
}

export default App;
