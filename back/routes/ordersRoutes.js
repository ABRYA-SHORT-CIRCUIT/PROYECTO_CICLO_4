const express = require('express');
const router = express.Router();

const {
    getOrders,
    createOrder,
    getOneOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/ordersController');

//Rutas para las operaciones CRUD sobre órdenes de compra
router.route('/orders').get(getOrders);
router.route('/orders/new').post(createOrder);
router.route('/orders/:id').get(getOneOrder);
router.route('/orders/:id').put(updateOrder);
router.route('/orders/:id').delete(deleteOrder);   //Solo admin podría eliminar una OC, aunque no debería poder.

module.exports = router;