module.exports = function(app){

    var items = [{name:"item 1"},{name:"item 2"},{name:"item 3"}];
    app.route('/api/items')
    .get(function(req,res){
        res.send(items);
    });
}
