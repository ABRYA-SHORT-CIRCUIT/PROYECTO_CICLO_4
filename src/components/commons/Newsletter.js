function Newsletter() {
    return (
        <div className="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <h2>Suscríbete y no te pierdas las mejores ofertas!!!</h2>
                            <span>Valoramos tu privacidad, solo te contactaremos con ofertas de nuestras tiendas.</span>
                        </div>
                        <form id="subscribe" action="" method="get">
                            <div className="row">
                                <div className="col-lg-5">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Nombre" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-5">
                                    <fieldset>
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Correo electrónico" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-2">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Nuestras tiendas:<br /><span>Cali - Medellín</span></li>
                                    <li>Línea nacional:<br /><span>018000 367930</span></li>
                                    <li>Sede Principal:<br /><span>Medellín Colombia</span></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Horario de atención:<br /><span>08:30 AM - 9:00 PM</span></li>
                                    <li>Correo electrónico:<br /><span>info@abryatvshop.com</span></li>
                                    <li>Redes Sociales:<br /><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Twitter</a>, <a href="/">Linkedin</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;