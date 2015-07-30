import React, {Component} from 'react';
import GridRow from './GridRow.react.js';

class GridBody extends Component {
    constructor(props) {
        super(props); 
    }

    render () {
        let rows = this.props.rows,
            columns = this.props.columns,
            selection = this.props.selection;
        return (
            <tbody>
                {rows.map(function(row, index) {
                    return (
                        <GridRow
                            key={index}
                            row={row}
                            columns={columns}
                            info={{rowIndex: index}}
                            selection={selection}
                        >
                        </GridRow>
                    );
                })}
            </tbody>     
        );
    }
};

export default GridBody;
