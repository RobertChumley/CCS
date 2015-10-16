var React = require('react');
var ProjectList = require('./components/projectlist.jsx');
var ReactDOM = require('react-dom');
var chatItemStore = require('./stores/chatitemstore.jsx');
var initial = chatItemStore.getItems();
function render(){
    ReactDOM.render(<ProjectList items={initial} />,app);
}
chatItemStore.onChange(function(items){
        initial = items;
        render();
});
render();
