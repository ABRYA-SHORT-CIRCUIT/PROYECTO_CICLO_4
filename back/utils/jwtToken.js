//Crear y enviar un token guarado en una cookie
const sentToken = (user, statusCode, res) => {

    //Creamos el token
    const userToken = user.getJwtToken();

    //Opciones del token
    const tokenOptions = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", userToken, tokenOptions).json({
        success: true,
        userToken,
        user
    })
}

module.exports = sentToken;