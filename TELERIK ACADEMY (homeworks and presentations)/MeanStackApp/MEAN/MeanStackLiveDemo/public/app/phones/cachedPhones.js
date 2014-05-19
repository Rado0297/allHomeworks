app.factory('cachedPhones', function(PhoneResource){
    var cachedPhones;

    return {
        query: function(){
            if(!cachedPhones){
                cachedPhones = PhoneResource.query();
            }

            return cachedPhones;
        }
    }
});