import { PData } from "../commons/ProductData";

export const productList = PData.map((item) =>
    <div className="col-lg-4">
        <div className="item">
            <div className="thumb">
                <div className="hover-content">
                    <ul>
                        <li><a href={'/products/' + item.SKU}><i className="fa fa-eye"></i></a></li>
                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <img src={item.Image} alt={item.Model} />
            </div>
            <div className="down-content">
                <h4>{item.Model}</h4>
                <span>${item.Price}</span>
                <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>
            </div>
        </div>
    </div >
);