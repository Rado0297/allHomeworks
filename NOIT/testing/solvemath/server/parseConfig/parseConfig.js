var Parse = require('parse');

console.log("This work");

module.exports = function(config){
    
    Parse.initialize("s8f53zNCJd2c3KGUDXIjhGYb2M2pvKZWMHPeNy7X", "vxKqrzmTWqToODLR1ettJgIDLllZIwHpVds1desJ");

    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");

/*
Parse.User.logIn("rado", "rado", {
  success: function(user) {
    // Do stuff after successful login.
    var h1Elements = document.getElementsByTagName("h1");

	for(var i = 0; i < h1Elements.length; i++) {
	   h1Elements[i].style.color = "#fff";
	}
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
*/


};