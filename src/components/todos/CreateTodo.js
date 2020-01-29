import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: ''
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.addTodo(this.state)
    this.props.dispatch({type: "ADD_TODO", payload: this.state})

  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (state) => dispatch({type: "ADD_TODO", payload: state})
//   }
// }

// export default connect(null, mapDispatchToProps)(CreateTodo);

export default connect()(CreateTodo)
