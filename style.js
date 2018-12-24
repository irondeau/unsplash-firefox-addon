/*jshint es6: true*/

const ID = "fa1c7bc43e05e60511d996cd8251145916b0bf09825529270b79293f4a6440b9";
const SECRET = "315dc8d4db25eb59bce1cf43dddf057b07b923c40b12330e0efd61376b901734";
const HOST = "https://api.unsplash.com/photos/random/?orientation=landscape&client_id=";
const UTM = "?utm_source=your_app_name&utm_medium=referral";

$.getJSON(HOST.concat(ID), function(photo) {
    console.log(photo);
    
    var screenImage = photo.urls.regular;
    console.log(screenImage);
    $("#main").css("background-image", "url(" + screenImage + ")");
    
    var unsplashLink = photo.links.html;
    console.log(unsplashLink);
        
    var author = photo.user.name;
    console.log(author);
    
    var username = photo.user.username;
    console.log(username);
        
    var profile = photo.user.links.html;
    console.log(profile);
});