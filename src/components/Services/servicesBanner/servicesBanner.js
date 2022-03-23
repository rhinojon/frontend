import React from "react";
import "../service.css";
import { ServiceBannerInfo } from "../../../Utilities/frontend/data/services/ServicesBannerInfo";

const ServicesBanner = () => {
	return (
		<div className="services-banner" id="services-banner">
			<div className="services-banner-content">
				<h3 className="services-banner-h3">Our Services</h3>
				
				{
					ServiceBannerInfo &&
					ServiceBannerInfo.map((item, index) => (
						<p key={index} className="services-banner-p">
							{item}
						</p>
					))
				}
			</div>
		</div>
	);
};

export default ServicesBanner;
