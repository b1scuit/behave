import React from 'react';

class Cell extends React.Component {
    items = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    elements = [];

    constructor(props) {
        super(props);
        for (const [index, value] of this.items.entries()) {
            this.elements.push(<option>{value}</option>)
        }
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <td>
                <div class="form-group">
                    <select class="form-control" id="" onChange={this.handleChange}>
                        {this.elements}
                    </select>
                </div>
            </td>
        );
    }
}

export default Cell;
