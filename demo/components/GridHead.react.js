import React, {Component} from 'react';

class GridHead extends Component {
    constructor(props) {
        super(props);
    }

    renderSelection() {
        if (this.props.selection === undefined) {
            return null;
        } else {
            return (
                <th>
                    <input type="checkbox"/>
                </th>        
            );
        }
    }

    render() {
        let columns = this.props.columns;

        return (
            <thead>
                <tr>
                    {this.renderSelection()}
                    {columns.map(function(column) {
                        return (
                            <th
                                key={column.label}
                            >
                                {column.label}
                            </th>
                        );  
                    })}
                </tr>
            </thead>
        );
    }
};

export default GridHead;
