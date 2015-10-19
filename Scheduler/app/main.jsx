var React = require('react');
var ProjectList = require('./components/projectlist.jsx');
var ReactDOM = require('react-dom');
var chatItemStore = require('./stores/chatitemstore.jsx');
var projectStore = require('./stores/projectstore.jsx');



var ProjectDetails = require('./components/projectdetail.jsx');
var centerContentText;


var initial = chatItemStore.getItems();
function render(){
    ReactDOM.render(<ProjectList items={initial} />,app);
}
function renderCenter(){
    ReactDOM.render(<ProjectDetails data={centerContentText} />,centerContent);
}
chatItemStore.onChange(function(items){
        initial = items;
        render();
});
projectStore.onChange(function(items){
    var item = projectStore.getFocusItem();
    centerContentText = item.name;
    renderCenter();
});
        
        
render();
renderCenter();
