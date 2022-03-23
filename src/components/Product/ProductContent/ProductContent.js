import React from "react";
import { Link } from "react-router-dom";
import "../product.css";
import { ProductContentInfo } from "../../../Utilities/frontend/data/products/ProductContent";

const productContent = () => {
	console.log(ProductContentInfo)
	return (
		<div className="products">
			<div className="product-content">
				<div className="product-content-bottom">
					<div className="product-content-values">
						<div className="product-content-values-row">
							{
								ProductContentInfo &&
								ProductContentInfo.map(item => (
									<div key={item.imgClass} className="product-content-values-item">
										<div className={item.imgClass}></div>
										<div className="product-content-card-values-info">
											<h5 className="product-content-values-h3">{item.h5Text}</h5>
											<p className="product-content-values-p">
												{item.p}
											</p>
										</div>
									</div>
									
								))
							}
						</div>
						<div className="lower-button-group">
							<Link to="/product-quotation">
								<button className="storage-content-button">
									Request a quote
								</button>
							</Link>
							<Link to="/quotation">
								<button className="storage-content-button">Make enquiry</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default productContent;
