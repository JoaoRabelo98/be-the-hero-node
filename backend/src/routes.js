const express = require('express');
const routes = express.Router();

const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents', IncidentController.index);

routes.get('/profile', ProfileController.index);

module.exports = routes;