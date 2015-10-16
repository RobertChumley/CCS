var dispatcher = require('./../dispatcher.js');
var restHelper = require('./../helpers/RestHelper.jsx');

function ChatItemStore(){
    var items =[];
    var listeners = [];
    
    restHelper.get("api/items")
    .then(function(data){
        items = data;
        triggerListeners();
    });
    
    function getItems(){
           return items;
    }
    function onChange(listener){
        listeners.push(listener);
    }
    function triggerListeners(){
        listeners.forEach(function(listener){
            listener(items);
        })
    }
    function addChatItem(item){
        items.push(item);
        triggerListeners();
    }
    dispatcher.register(function(event){
        var split = event.type.split(':');
        if(split[0] === 'chat-item'){
            switch(split[1]){
                case "add":
                    addChatItem(event.payload);
                    break;
            }
        }
    });
    return {
        getItems:getItems,
        onChange:onChange
    };
    
}
module.exports = new ChatItemStore();