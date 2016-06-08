app.factory('FAQsResource', function($resource){
    var FAQsResource = $resource('/api/faqs/:id', {_id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return FAQsResource;
});