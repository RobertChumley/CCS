var dispatcher= require('./../dispatcher.js');
module.exports = {
    projectChanged:function(item){
        dispatcher.dispatch({
            payload: item,
            type:"project:projectChanged"
        });
    }
}