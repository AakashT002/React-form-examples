import React from 'react';
import { Button, SVGIcon } from 'react-md';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', lname: '', course: ''};

    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleDropChange = this.handleDropChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFnameChange(event) {
    this.setState({fname: event.target.value});
  }

handleLnameChange(event){
this.setState({lname: event.target.value});
}

handleDropChange(event){
this.setState({course: event.target.value});
}

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.fname + '\n ' +this.state.lname + '\n' + this.state.course );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.fname} onChange={this.handleFnameChange} /> <br/>
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lname} onChange={this.handleLnameChange} /> <br/>
        </label>
        
          <label>
          Pick your favorite Course:
          <select value={this.state.course} onChange={this.handleDropChange}>
            <option value="Java">Java</option>
            <option value=".Net">.Net</option>
            <option value="React.js">React.js</option>
            <option value="Selenium">Mango</option>
          </select>
        </label> <br/>
            <h5>Theme Examples</h5>
    <Button flat>Hello, World!</Button>
    <Button flat primary iconChildren="chat_bubble_outline">Chat</Button>
    <Button flat secondary iconBefore={false} iconChildren="chat_bubble_outline">Chat</Button>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;