import React from 'react';

class Cell extends React.Component {
    items = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log(value)
    }

    render() {
        return (
            <td>
                <div className="form-group">
                    <select className="form-control" id="" onChange={(e)=>{this.handleChange(e.target.value)}}>
                        {this.items.map((item) => {
                            return <option key={item}>{item}</option>;
                        })}
                    </select>
                </div>
            </td>
        );
    }
}

export default Cell;
