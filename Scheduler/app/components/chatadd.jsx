var React = require('react');
var action = require('./../actions/chatitemaddaction.js');

module.exports = React.createClass({
    getInitialState: function(){
        return {input:""};
    },
    handleInputName: function(e){
        this.setState({input: e.target.value});
    },
    addItem:function(e){
        e.preventDefault();
        action.add({name: this.state.input});
        this.setState({
           input:'' 
        });
        
    },
    render: function(){
        return (
                <form onSubmit={this.addItem} >
                    <input value={this.state.input} onChange={this.handleInputName} /> <button>Send</button>
                </form>
            );
    }

});