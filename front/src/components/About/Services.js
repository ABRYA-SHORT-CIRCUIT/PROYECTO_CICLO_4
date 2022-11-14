const infoService = [
    {
        'serviceType': 'Asesor de Ventas',
        'description': 'Desde el primer momento te acompañamos en el proceso de selección, para que te lleves el mejor equipo para tu gusto y necesidad.',
        'imageLink': 'assets/images/service-01.jpg'
    },
    {
        'serviceType': 'Servicio Técnico',
        'description': 'La compra no es el final del proceso, es solo el inicio de un compromiso de servicio permanente, para asegurar una satisfacción total.',
        'imageLink': 'assets/images/service-02.jpg'
    },
    {
        'serviceType': 'Componentes y Repuestos',
        'description': 'Cada equipo es solo un componente de un sistema de entretenimiento, contamos en un mismo lugar todo lo necesario para complementar tu compra.',
        'imageLink': 'assets/images/service-03.jpg'
    }
];
const serviceList = infoService.map((item) =>
    <div className="col-lg-4">
        <div className="service-item">
            <h4>{item.serviceType}</h4>
            <p>{item.description}</p>
            <img src={item.imageLink} alt={item.serviceType} />
        </div>
    </div>
);

function Services() {
    return (
        <section className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Servicios</h2>
                            <span>Ofrecemos más que un servicio posventa, el mejor acompañamiento para nuestros clientes.</span>
                        </div>
                    </div>

                    {serviceList}
                </div>
            </div>
        </section>
    )
}
export default Services;