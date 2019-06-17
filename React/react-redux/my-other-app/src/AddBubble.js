import React from 'react';

class AddBubble extends React.Component {

    state = {
        name: null,
        age: null,
        jacket: null,
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    submitFormHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addBubble(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitFormHandler}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.onChangeHandler}></input>
                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.onChangeHandler}></input>
                    <label htmlFor="name">Jacket: </label>
                    <input type="text" id="jacket" onChange={this.onChangeHandler}></input>
                    <button> SUBMIT </button>
                </form>
            </div>
        );
    }
}

export default AddBubble;