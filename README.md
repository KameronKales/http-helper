### kam.js:

`kam.js` is an incredibly simple easy to implement http helper function for vanilla javascript.

You can use this both in the browser and in node. I use it in my own projects for simple **GET** and **POST** requests.

At this time no other methods are supported.

#### Table Of Contents:

- [kam.js:](#kam.js)
  - [Table Of Contents:](#table-of-contents)
  - [Intro:](#intro)
  - [Methods:](#methods)
    - [GET:](#get)
    - [POST:](#post)

#### [Intro](#table-of-contents):

`kam.js` is meant to be approachable for those who might not quite understand promises, babel, es6 or any of the other industry jargon. With kam.js you can install 1 thing and have working http requests in seconds.

This is a tiny opinionated package. We don't want to make it complicated. I welcome all PRs but please release, the target market for this package is jr developers. So all fancy 1 liners will be rejected :)

To get started with `kam.js` please run:

`npm i kam.js --save`

and then, import kam into your package:

`const kam = require("kam.js")`

---

#### [Methods](#methods):

kam.js only supports 2 methods. They are listed in detail below. We have no intention of making the package more complex or adding any fancy features. If you prefer more advanced packages, so be it. This is meant to be a great starting point for someone to learn how to work with APIs.

We currently have the following methods:

- [GET](#get)
- [POST](#post)

#### [GET](#methods):

To make a **GET** request using `kam.js`:

The first parameter is the API you would like to make a request to. The second is a callback function that triggers when the request is complete.

```javascript
kam.get("https://jsonplaceholder.typicode.com/todos/1", function(response) {
  console.log(response);
});
```

Your response will be printed in the console, and at that point you can do anything else you want with it. If there is an error you will be returned an object like so:

```json
{
  "error_code": "404",
  "error_message": "The route you requested was not found"
}
```

#### [POST](#methods):

To make a **POST** request using `kam.js`:

The first parameter is the API you would like to make a request to. The second is the data you would like to send with your request. The third is a callback function that triggers when the request is complete.

```javascript
const data = {
  email: "kameronkales@gmail.com",
  password: "notachance"
};
kam.post("https://jsonplaceholder.typicode.com/todos/1", data, function(
  response
) {
  console.log(response);
});
```

Your response will be printed in the console, and at that point you can do anything else you want with it. If there is an error you will be returned an object like so:

```json
{
  "error_code": "404",
  "error_message": "The route you requested was not found"
}
```

---
