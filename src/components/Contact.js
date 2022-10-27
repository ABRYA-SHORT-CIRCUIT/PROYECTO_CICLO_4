function Contact() {
    return (
        <div className="contact-main">
            <div className="page-heading about-page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Contáctanos</h2>
                                <span>Nos encanta conocer sus opiniones y comentarios</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="map">
                                <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" width="100%" height="400px" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>


                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Hola!!! ¿Qué hay de nuevo?</h2>
                                <span>Procuramos responder todas las consultas, aunque a veces nos demoremos un poco más.</span>
                            </div>
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Nombre" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="Correo electrónico" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Tu mensaje" required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                <span>Details to details is what makes Therichpost different from the other themes.</span>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your Name" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required="" />
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
                                        <li>Store Location:<br /><span>Ludhiana Punjab</span></li>
                                        <li>Phone:<br /><span>12345678910</span></li>
                                        <li>Office Location:<br /><span>North Ludhiana</span></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                        <li>Email:<br /><span>info@company.com</span></li>
                                        <li>Social Media:<br /><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Twitter</a>, <a href="/">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Contact;