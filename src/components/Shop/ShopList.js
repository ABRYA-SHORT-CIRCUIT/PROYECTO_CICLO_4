import { Link } from "react-router-dom";
import { OData } from "../commons/OrderData";

export const shopList = OData.map((item) =>
    <tr className="cart_item">
        <td className="product-thumbnail" data-title="Thumbnail">
            <Link className="logo" to={{ pathname: '/products/' + item.Product.SKU }}><img src={item.Product.Thumbnail} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /></Link>
        </td>

        <td className="product-name" data-title="Product">
            <Link className="logo" to={{ pathname: '/products/' + item.Product.SKU }}>{item.Product.Description}</Link>
        </td>

        <td className="product-price" data-title="Price">
            <span className="amount"><span className="currencySymbol"><pre wp-pre-tag-3=""></pre>
            </span>${item.Product.Price}</span>
        </td>
        <td className="product-quantity" data-title="Quantity">
            <div className="quantity">
                <label className="sr-only" >Quantity</label>
                <input type="number" value={item.Quantity} id="qty" className="input-text qty text" step="1" min="0" max="9" title="Qty" size="4" />
            </div>
        </td>
        <td className="product-subtotal" data-title="Total">
            <span className="amount">
                <span className="currencySymbol">
                    <pre wp-pre-tag-3=""></pre>
                </span>${item.Subtotal}</span>
        </td>
        <td className="product-remove" data-title="Remove">
            <a href="/" className="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</a>
        </td>
    </tr>
);