var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div>Details</div>
                <div>{this.props.data}</div>
            </div>
        );
    }
});