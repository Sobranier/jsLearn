import React, {Component} from 'react';
import GridHead from './GridHead.react.js';
import GridBody from './GridBody.react.js';

class Grid extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        let rows = this.props.rows,
            columns = this.props.columns;

        return (
            <table className="table table-bordered table-hover">
                <GridHead
                    columns={columns}
                >
                </GridHead>
                <GridBody
                    rows={rows}
                    columns={columns}
                >
                </GridBody>
            </table>
        );
    }
};

export default Grid;
