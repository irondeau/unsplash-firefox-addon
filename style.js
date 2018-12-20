/*jshint es6: true*/

const ID = "fa1c7bc43e05e60511d996cd8251145916b0bf09825529270b79293f4a6440b9";
const SECRET = "315dc8d4db25eb59bce1cf43dddf057b07b923c40b12330e0efd61376b901734";
const HOST = 'https://api.unsplash.com/photos/random/?client_id=';

$.getJSON(HOST.concat(ID), function(data) {
    console.log(data);
});