import React, {Component} from 'react';

class GridHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let columns = this.props.columns;

        return (
            <thead>
                <tr>
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
