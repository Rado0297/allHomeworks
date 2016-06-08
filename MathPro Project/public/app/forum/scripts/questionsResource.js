app.factory('QuestionsResource', function($resource){
    var QuestionsResource = $resource('/api/questions/:id', {_id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return QuestionsResource;
});