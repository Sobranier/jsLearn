import React, {Component} from 'react';
import Addons from "react/addons";

/**
 *  define class HelloDemo
 **/
class ListItem extends Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div>{this.props.data.text}</div>
        );
    }
}

class HelloDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id:1,text:'道士下山'},
                {id:2,text:'捉妖记'},
                {id:3,text:'煎饼侠'},
                {id:4,text:'大圣归来'}
            ]
        };
    };

    handleClick() {
        let data = this.state.data;
        [data[0], data[3]] = [data[3], data[0]];
        this.setState(data);
    };

    _getPP() {
        var props = this.props;
        React.Children.forEach(props.children, (child) => {
          var key = child.key;
          console.log(key);
        });
        return [];
    }

    render() {
        var pp = this._getPP();
        return (
            <div>
                {pp}
            </div>
        );
    };
};


/**
 *  render react
 **/
React.render(
    <HelloDemo>
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
        <div key="4">4</div>
    </HelloDemo>,
    document.getElementById('test')
);
