import React, {Component} from 'react';
import ReactBootstrap, {Button, Input} from 'react-bootstrap';

class GridTd extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        let row = this.props.row,
            column = this.props.column,
            info = this.props.info,
            content = '';

        if (!column.renderer) {
            content = row[column.name];
        } else {
            if (!Array.isArray(column.renderer)) {
                content = column.renderer(row[column.name]);
            } else {
                content = [];
                column.renderer.forEach(function(element, index) {
                    switch (element.type) {
                        case 'button':
                            content.push(
                                <Button
                                    bsStyle={element.class}
                                    bsSize={element.size ? element.size : 'xsmall'}
                                    onClick={element.action.bind(null, row, info)}
                                    key={index}
                                >
                                    {element.value}
                                </Button>
                            );
                            break;
                        case 'a':
                            content.push(
                                <Button
                                    bsStyle="link"
                                    href={element.url}
                                    target="_blank"
                                    key={index}
                                >
                                    {element.value}
                                </Button>
                            );
                            break;
                        case 'html':
                            content.push(
                                <span
                                    key={index}
                                >
                                    {element.value}
                                </span>
                            );
                            break;
                        default:
                            content.push(element.value);
                    }
                });
            }
        }
        return (
            <td
                className={column.class}
            >
                {content}
            </td>    
        );
    }
}

export default GridTd;
