var React = require('react');
var actions = require('../actions/projectactions.js');
module.exports = React.createClass({
    data: [],
    handleClick: function(item,index){
        actions.projectChanged(item);
    },
    render: function() {
        data = this.props.items;
        return (
            <div>
                <div>projects</div>
                {this.props.items.map(function(item,index){
                    
                    return (
                            <div className="linkLike" onClick={this.handleClick.bind(this, item,index)} key={index} >{item.name}</div>
                        );
                    },this)
                }
            </div>
        );
    }
});