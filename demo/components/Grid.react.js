var GridTd = React.createClass({
    getDefaultProps: function () {
        return {
            info: {},
            lineData: {}
        }
    },
    render: function () {
        var info = this.props.info,
            lineData = this.props.lineData;
            content = '';
        if (!info.renderer) {
            content = lineData[info.name];
        } else {
            if (!Array.isArray(info.renderer)) {
                content = info.renderer(lineData[info.name]);
            } else {
                content = [];
                info.renderer.forEach(function(element, index) {
                    switch (element.type) {
                        case 'button':
                            content.push(
                                <Button
                                    bsStyle={element.class}
                                    bsSize={element.size ? element.size : 'xsmall'}
                                    onClick={element.action}
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
                                >
                                    {element.value}
                                </Button>
                            );
                            break;
                        case 'input':
                            content.push(
                                <Input
                                    type='text'
                                    value={element.value}
                                />
                            );
                            break;
                        case 'html':
                            content.push(
                                <span>
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
            <td className={info.class}>{content}</td>    
        );
        
    }
});
var GridLine = React.createClass({
    getDefaultProps: function () {
        return {
            lineData: {},
            rowInfo: []
        }
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var data = this.props.lineData,
            rowInfo = this.props.rowInfo,
            line = [];
        for (var i = 0, len = rowInfo.length; i < len; i ++) {
            line.push(
                <GridTd
                    info={rowInfo[i]}
                    lineData={data}
                >
                </GridTd>
            );
        }
        return (
            <tr>
                {line}
            </tr>
        );
    }
    
});

var MyGridHead = React.createClass({
    getDegaultProps: function () {
        return {
            lineData: {}
        }
    },
    render: function () {
        var data = this.props.lineData,
            line = [];
        for (var i = 0, len = data.length; i < len; i ++) {
            line.push(
                <th>
                    {data[i].label}
                </th>
            );
        }
        return (
            <tr>
                {line}
            </tr>    
        );
    }
});

var Grid = React.createClass({
    getDefaultProps: function () {
        return {
            headList: [],
            dataList: []
        };
    },
    render: function () {
        var data = this.props.dataList,
            headList = this.props.headList,
            lines = [];
        for (var i = 0, len = data.length; i < len; i ++) {
            lines.push(<GridLine lineData={data[i]} rowInfo={headList}></GridLine>);
        }
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <MyGridHead lineData={headList}/>
                </thead>
                <tbody>
                    {lines}
                </tbody>
            </table>
        );
    }
});
