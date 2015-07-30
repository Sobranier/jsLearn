import React, {Component} from 'react';
import GridTd from './GridTd.react.js';

class GridRow extends Component {
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
        let row = this.props.row,
            columns = this.props.columns,
            info = this.props.info;

        return (
            <tr>
                {this.renderSelection()}
                {columns.map(function(column, index) {
                    info.rowIndex  = index;
                    return (
                        <GridTd
                            key={index}
                            row={row}
                            column={column}
                            info={info}
                        >
                        </GridTd>
                    );
                })}
            </tr>
        );
    }
}

export default GridRow;
