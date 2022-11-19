const express = require('express');
const {
    createUser,
    logInUser,
    logOutUser,
    getSelfUser,
    updateProfile,
    updatePassword,
    getAllUsers,
    getAnyUser,
    updateAnyUser
} = require('../controllers/clientsController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/userAuthentication');
const router = express.Router();

//Rutas para las operaciones CRUD sobre usuarios/clientes
router.route('/clients/signup').post(createUser);
router.route('/clients/signin').post(logInUser);
router.route('/clients/signout').get(isAuthenticatedUser, logOutUser);
router.route('/clients/profile').get(isAuthenticatedUser, getSelfUser);
router.route('/clients/profile').put(isAuthenticatedUser, updateProfile);
router.route('/clients/pass').put(isAuthenticatedUser, updatePassword);
router.route('/admin/clients').get(isAuthenticatedUser, authorizeRoles('admin', 'seller'), getAllUsers);
router.route('/admin/clients/:id').get(isAuthenticatedUser, authorizeRoles('admin', 'seller'), getAnyUser);
router.route('/admin/clients/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateAnyUser);



//router.route('clients/:id').delete(deleteClient);   //Solo admin puede eliminar usuarios de la BD

module.exports = router;