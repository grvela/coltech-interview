const express = require('express');
const connect = require('../controllers/FirebaseController');

const firebase = new connect;

const routes = express.Router();


routes.get("/repositories", (request, response) => {

  firebase.getData((object) => {
    return response.json(object);
  });

});


routes.post("/repositories", (request, response) => {
  
  let object = firebase.setData(request.body);
  return response.json(object);

});


routes.put("/repositories", (request, response) => {

  firebase.editData(request.body);
  return response.status(200).send();

});


routes.post("/repositories/like", (request, response) => {

  firebase.addLike(request.body);
  return response.status(200).send();

});


routes.delete("/repositories", (request, response) => {
  firebase.deleteData(request.body);
  return response.status(200).send();
});


module.exports = routes;