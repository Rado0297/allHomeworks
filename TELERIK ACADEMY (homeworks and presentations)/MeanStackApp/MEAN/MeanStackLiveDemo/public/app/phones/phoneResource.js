app.factory('PhoneResource', function($resource){
    var PhoneResource = $resource('/api/phones/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return PhoneResource;
});