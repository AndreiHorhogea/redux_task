import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this); //in plus
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClick() {
        this.props.add(this.state.value);
        this.setState({
            value: ''
        })
    };

    deleteItem(){
        this.props.remove(this.state.value);
    };

    render() {
        return (
            <div>
                <input type={"text"} value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.handleClick}>Submit</button>
                <button onClick={this.deleteItem}>Delete</button>
            </div>
        );
    }
}

export default Form;