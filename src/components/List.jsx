import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ul>
                {this.props.items ? this.props.items.map((item, index) => {
                    return <li key={index}>{item}</li>
                }): <p>No item in the list yet</p> }
                </ul>
            </div>
        );
    }
}

export default List;