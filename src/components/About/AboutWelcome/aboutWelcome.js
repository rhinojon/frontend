import React from 'react';
import "./aboutWelcome.css";
import { AboutWelcomeParagraph } from "../../../Utilities/frontend/data/about/AboutWelcome";
import { AboutValues } from "../../../Utilities/frontend/data/about/AboutValues";

const AboutWelcome = () => {

	return (
		<div className="about-welcome">
			<div className="about-welcome-content">
				<div className="about-welcome-content-top">
					{
						AboutWelcomeParagraph &&
						AboutWelcomeParagraph.map((paragraph, index) => (
							<p key={index} className="about-welcome-content-top-p">
								{paragraph}
							</p>
						))
					}
				</div>
				<div className="about-welcome-content-bottom">
					<h5 className="about-welcome-content-bottom-h3">
						We observe the following values: 
					</h5>
					<div className="about-welcome-content-values">
						{
							AboutValues &&
							AboutValues.map((section, index) => (
								<div key={index} className="about-welcome-content-values-item">
										<div className="about-welcome-content-values-h3">
											<div className="about-welcome-start">

											</div>
											<h5 className="about-welcome-content-values-header">
												{section.header}
											</h5>
										</div>
									<p className="about-welcome-content-values-p">
										{section.paragraph}
									</p>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutWelcome
