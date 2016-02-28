app.factory('parseConfig', function($q, $http, identity, UsersResource){
    return {
        login: function(user){

            login(user).then(function(success){
                if(success){
                    console.log('Successful login!');
                }
                else{
                    console.log('Username/password is not valid');
                }
            });

            console.log("Parse Auth file is here :D!");
        }
    }
});