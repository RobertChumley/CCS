var dispatcher = require('./../dispatcher.js');
var restHelper = require('./../helpers/RestHelper.jsx');

function ProjectStore(){
    var items = [];
    var listeners = [];
    var focus;
    restHelper.get("api/items")
    .then(function(data){
        items = data;
        triggerListeners();
    });
    
    function getItems(){
        return items;
    }
    function getFocusItem(){
        return focus;
    }
    function focusItem(item){
        focus = item;
        triggerListeners();
    }
    function onChange(listener){
        listeners.push(listener);
    }
    function triggerListeners(){
        listeners.forEach(function(listener){
            listener(items);
        })
    }
     dispatcher.register(function(event){
        var split = event.type.split(':');
        if(split[0] === 'project'){
            switch(split[1]){
                case "projectChanged":
                    focusItem(event.payload);
                    break;
            }
        }
    });
    return {
        getItems:getItems,
        onChange:onChange,
        getFocusItem:getFocusItem
    };
}

module.exports = new ProjectStore();