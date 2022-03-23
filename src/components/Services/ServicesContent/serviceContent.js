import React from "react";
import { HashLink } from "react-router-hash-link";
import "../service.css";
import { ServicesCardsInfo } from "../../../Utilities/frontend/data/services/ServicesCardsInfo";

const ServiceContent = () => {
	
	return (
		<div className="services">
			<div className="service-content">
				<div className="service-content-bottom">
					<div className="service-content-values">
						<div className="service-content-values-row">
							{
								ServicesCardsInfo &&
								ServicesCardsInfo.map(card => (
									<HashLink
										key={card.imgClass}
										to={card.link}
										className="service-content-values-item">
										<div className={card.imgClass}></div>
										<div className="service-content-card-info">
											<h4 className="service-content-values-h3">
												{card.h4Header}
											</h4>
											<p className="service-content-values-p">
												{card.p}
											</p>
										</div>
									</HashLink>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceContent;
