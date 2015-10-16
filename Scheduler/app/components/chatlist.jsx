var React = require('react');
var ChatAdd = require('./chatadd.jsx');
module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div>Hello from inside a component</div>
                {this.props.items.map(function(item,index){
                    return (
                            <div>{item.name}</div>
                        );
                    })
                }
                <ChatAdd />
            </div>
        );
    }
});