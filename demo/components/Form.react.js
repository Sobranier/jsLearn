var Form = React.createClass({
    getInitialState: function() {
        return {
            
        };
    },
    _handleSubmit: function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onVlidator('data form form');
    },
    render: function () {
        return (
            <form className={this.props.className} onSubmit={this._handleSubmit} ref="form">
                {this.props.children}
            </form>
        );
    }
});
