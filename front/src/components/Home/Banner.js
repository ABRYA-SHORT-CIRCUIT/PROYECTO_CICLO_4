function Banner() {
    return (
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">

                    {/*Left element*/}
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>ABRYA TV Shop</h4>
                                    <span>Innovación, Tenología de punta &amp; Calidad</span>
                                    <div className="main-border-button">
                                        <a href="/products">Encuentra tu TV!</a>
                                    </div>
                                </div>
                                <img src="/assets/images/left-banner-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/*Samsung-LG-Kalley-Otros*/}
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                {/*Samsung*/}
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Samsung</h4>
                                                <span>Modelos recientes en TV Samsung</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Samsung</h4>
                                                    <p>Descubre las últimas novedades en televisores Samsung para el 2022.</p>
                                                    <div className="main-border-button">
                                                        <a href="#men">Descubre más!</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-01.jpg" alt="Banner" />
                                        </div>
                                    </div>
                                </div>
                                {/*LG*/}
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>LG</h4>
                                                <span>Modelos recientes en TV LG</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>LG</h4>
                                                    <p>Descubre las últimas novedades en televisores LG para el 2022.</p>
                                                    <div className="main-border-button">
                                                        <a href="#women">Descubre más!</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-02.jpg" alt="Banner" />
                                        </div>
                                    </div>
                                </div>
                                {/*Kalley*/}
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Kalley</h4>
                                                <span>Modelos recientes en TV Kalley</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Kalley</h4>
                                                    <p>Descubre las últimas novedades en televisores Samsung para el 2022.</p>
                                                    <div className="main-border-button">
                                                        <a href="#kids">Descubre más!</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-03.jpg" alt="Banner" />
                                        </div>
                                    </div>
                                </div>
                                {/*Otros*/}
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Otras Marcas</h4>
                                                <span>Modelos recientes en TV de diferentes marcas</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Otras Marcas</h4>
                                                    <p>Descubre las últimas novedades en televisores de diferentes marcas para el 2022.</p>
                                                    <div className="main-border-button">
                                                        <a href="/products">Descubre más!</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-04.jpg" alt="Banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;