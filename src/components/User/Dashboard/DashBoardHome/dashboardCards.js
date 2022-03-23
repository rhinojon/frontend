import {
	faGem,
	faInfoCircle,
	faShippingFast,
	faTable,
	faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import "../dashboard.css";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import DashboardCard from "../DashBoardHome/dashboardCard/dashboardCard";
import { dashboardHorizontalCards } from "./dashboardCardsData"

const DashboardCards = () => {
	const [logdata, setLogData] = useState([]);
	const [storageData, setStorageData] = useState([]);
	const [quotation, setQuotation] = useState([]);
	const [logquotation, setLogQuotation] = useState([]);
	const [storageQuotation, setStorageQuotation] = useState([]);
	const [productQuotation, setProductQuotation] = useState([]);

	const getLogData = () => {
		axios
			.get("https://rhinojohnbackend.herokuapp.com/api/logisticsrecords")
			.then((res) => {
				setLogData(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getQuotationData = () => {
		axios
			.get("https://rhinojohnbackend.herokuapp.com/api/quotation")
			.then((res) => {
				setQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getStorageData = () => {
		axios
			.get("https://rhinojohnbackend.herokuapp.com/api/storageshipment")
			.then((res) => {
				setStorageData(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getLogisticsQuotation = () => {
		axios
			.get(
				"https://rhinojohnbackend.herokuapp.com/api/logisticsquotation"
			)
			.then((res) => {
				setLogQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getStorageQuotation = () => {
		axios
			.get("https://rhinojohnbackend.herokuapp.com/api/storagequotation")
			.then((res) => {
				setStorageQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getProductQuotation = () => {
		axios
			.get("https://rhinojohnbackend.herokuapp.com/api/productquotation")
			.then((res) => {
				setProductQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getLogData();
		getStorageData();
		getQuotationData();
		getLogisticsQuotation();
		getStorageQuotation();
		getProductQuotation();
	}, []);

	return (
		<div className="dashboard-cards">
			{/* <div className="dashboard-cards-container">
				<HashLink
					to="/dashboard/productquotation#product-quotation"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faGem}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{productQuotation
							? productQuotation.length
							: "No product quotation yet"}
					</h3>
					<p className="dashboard-card-p">Product quotations</p>
					
				</HashLink>

				<HashLink
					to="/dashboard/generalenquiries#product-enquiries"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faInfoCircle}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{quotation
							? quotation.length
							: "No general enquiries yet"}
					</h3>
					<p className="dashboard-card-p">General Enquiries</p>
				</HashLink>

				<HashLink
					to="/dashboard/storagequotation#storage-quotation"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faWarehouse}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{storageQuotation
							? storageQuotation.length
							: "No storage quotations yet"}
					</h3>
					<p className="dashboard-card-p">Storage quotation</p>
				</HashLink>
			</div>
			<div className="dashboard-cards-container">
				<HashLink
					to="/dashboard/shipmentquotation#shipment-quotation"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faShippingFast}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{logquotation
							? logquotation.length
							: "No storage quotation data yet"}
					</h3>
					<p className="dashboard-card-p">Shipment quotation</p>
				</HashLink>

				<HashLink
					to="/dashboard/shipmenttable#shipment-table"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faTable}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{logdata ? logdata.length : "No shipments yet"}
					</h3>
					<p className="dashboard-card-p">Shipment table</p>
				</HashLink>

				<HashLink
					to="/dashboard/storagetable#storage-table"
					className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon
							className="dashboard-card-icon"
							color="white"
							size="4x"
							icon={faTable}
						/>
					</div>
					<h3 className="dashboard-card-h3">
						{storageData
							? storageData.length
							: "No storage data available yet"}
					</h3>
					<p className="dashboard-card-p">Storage table</p>
				</HashLink>
			</div> */}
				<Grid spacing={2} container>
					{
						dashboardHorizontalCards.map(item => (
							<Grid item lg={4} sm={12} key={item.id}>
								<DashboardCard 
									icon={item.icon}
									title={item.title}
									path={item.path}
									text={item.text}
								/>
							</Grid>
						))
					}
				</Grid>
		</div>
	);
};

export default DashboardCards;
