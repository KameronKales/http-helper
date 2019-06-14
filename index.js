const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(aURL, aCallback) {
  const anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() {
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
      aCallback(anHttpRequest.responseText);
    }
    if (anHttpRequest.readyState == 4 && anHttpRequest.status != 200) {
      let error = {
        error_code: anHttpRequest.status,
        error_message: anHttpRequest.responseText
      };
      aCallback(error);
    }
  };
  anHttpRequest.open("GET", aURL, true);
  anHttpRequest.send(null);
}

function post(aURL, data, aCallback) {
  var anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() {
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
      aCallback(anHttpRequest.responseText);
    }
    if (anHttpRequest.readyState == 4 && anHttpRequest.status != 200) {
      let error = {
        error_code: anHttpRequest.status,
        error_message: anHttpRequest.responseText
      };
      aCallback(error);
    }
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
