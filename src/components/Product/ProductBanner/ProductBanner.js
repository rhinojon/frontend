import React from "react";
import "../product.css";
import { ProductInfoBanner } from "../../../Utilities/frontend/data/products/ProductBanner";

const ProductBanner = () => {
	return (
		<div className="product-banner">
			<div className="product-banner-content">
				<h3 className="product-banner-h3">Our Products</h3>
				{
					ProductInfoBanner &&
					ProductInfoBanner.map((p, index) => (
						<p key={index} className="product-banner-p">
							{p}
						</p>
					))
				}
			</div>
		</div>
	);
};

export default ProductBanner;
