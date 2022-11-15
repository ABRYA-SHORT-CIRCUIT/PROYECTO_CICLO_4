const express = require('express');
const router = express.Router();

const {
    getClients,
    createClient,
    getOneClient,
    updateClient,
    deleteClient
} = require('../controllers/clientsController');

//Rutas para las operaciones CRUD sobre usuarios/clientes
router.route('clients/').get(getClients);            //Solo admin puede consultar todos los usuarios en la BD
router.route('clients/new').post(createClient);
router.route('clients/:id').get(getOneClient);
router.route('clients/:id').put(updateClient);
router.route('clients/:id').delete(deleteClient);   //Solo admin puede eliminar usuarios de la BD

module.exports = router;