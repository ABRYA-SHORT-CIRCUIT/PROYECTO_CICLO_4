const clientModel = require('../models/clientsDB');

//Crear un nuevo usuario/cliente en la BD
exports.createClient = async (req, res, next) => {
    const newClient = await clientModel.create(req.body);

    res.status(201).json({
        success: true,
        newClient
    });
}

//Consultar todos los clientes en la BD
exports.getClients = async (req, res, next) => {
    const clientList = await clientModel.find().sort({ _id: -1 });
    //Los resultados se ordenan por el _id, de forma descendente (1, para ascendente)

    res.status(200).json({
        suscess: true,
        totalClients: clientList.length,
        clientList
    })
}

//Consultar un solo usuario/cliente en la BD
exports.getOneClient = async (req, res, next) => {
    const client = await clientModel.findById(req.params.id);

    if (!client) {
        return res.status(404).json({
            success: false,
            message: 'El cliente no existe.',
        });
    }

    res.status(200).json({
        suscess: true,
        client
    })
}

//Actualizar la información de un usuario/cliente en la BD
exports.updateClient = async (req, res, next) => {
    let client = await clientModel.findById(req.params.id);

    if (!client) {
        return res.status(404).json({
            success: false,
            message: 'El cliente no existe.',
        });
    }
    client = await clientModel.findByIdAndUpdate(req.params.id, req.body, {
        //Se actualizan solo los campos que hayan cambiado.
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        client
    });
}

//Eliminar el usuario/cliente de la base de datos
exports.deleteClient = async (req, res, next) => {
    const client = await clientModel.findById(req.params.id);

    if (!client) {
        return res.status(404).json({
            success: false,
            message: 'El cliente no existe.',
        });
    }
    await client.remove();

    res.status(200).json({
        success: true,
        message: 'El cliente fue eliminado corectamente'
    });
}