var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div>Your active projects</div>
                {this.props.items.map(function(item,index){
                    return (
                            <div>{item.name}</div>
                        );
                    })
                }
            </div>
        );
    }
});