
const express=require("express")
const router=express.Router();

const {addProduct, listProducts, updateProduct, deleteProduct, updateStockProduct} = require("../controllers/adminProduct");


//agregar producto
router.route('/addProduct').post(addProduct);
//Listar productos
router.route('/listProduct').get(listProducts);
//Actualizar producto
router.route('/updateProduct/:id').put(updateProduct);
//Eliminar producto
router.route('/deleteProduct/:id').delete(deleteProduct);
//ACtualizar stock
router.route('/updateStockProduct/:id').put(updateStockProduct);

module.exports=router;