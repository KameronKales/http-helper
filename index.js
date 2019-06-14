var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(aURL, aCallback) {
  var anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() {
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
      aCallback(anHttpRequest.responseText);
  };
  anHttpRequest.open("GET", aURL, true);
  anHttpRequest.send(null);
}

function post(aURL, data, aCallback) {
  var anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() {
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
      aCallback(anHttpRequest.responseText);
  };
  anHttpRequest.open("POST", aURL, true);
  anHttpRequest.setRequestHeader("Content-Type", "application/json");
  formatted_data = JSON.stringify(data);
  anHttpRequest.send(formatted_data);
}
module.exports = {
  get,
  post
};
