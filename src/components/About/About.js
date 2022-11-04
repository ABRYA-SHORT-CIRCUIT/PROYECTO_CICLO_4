import Us from "./Us";
import Team from "./Team";
import Services from "./Services";
import Newsletter from "../commons/Newsletter";

function About() {
    return (
        <div className="about-main">
            <div className="page-heading about-page-heading" id="top">
                <div classNameclass="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Nuestra Compañía</h2>
                                <span>Innovación, Tecnología de punta &amp; Calidad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Us />
            <Team />
            <Services />
            <Newsletter />
        </div>
    )
}
export default About;