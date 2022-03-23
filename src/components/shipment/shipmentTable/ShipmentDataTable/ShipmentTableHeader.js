import {
  faChevronRight,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import "./shipmentdatatable.css";
import moment from "moment"
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ShipmentTableHeader = ({ headers }) => {
  const header = headers;

	const tableHeader = makeStyles((theme) => ({
		wrapper: {
			width: "80vw",
			margin: "auto",
			backgroundColor: theme.palette.primary.main,
			borderTopLeftRadius: 2,
			borderTopRightRadius: 2,
			display: "flex",
			alignItems: "flex-start",
			padding: "10px"
		}
	}))



//   const dateString = moment(date).format('MMMM Do YYYY') 
//   console.log(dateString, "the date string")

//   console.log("The result header item is", header)

  const classes = tableHeader()

  return (
	<>
		<Box className={classes.wrapper} color="white">
			{/* <div className="font-awesome-sign-alt-icon">
				<FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
			</div> */}
			<Grid container spacing={2} >
				<Grid item md={4} sm={12} className="shipment-table-headers-left">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-flex">
							Tracking number :
							<span className="grey-item-container-shipment">
								{header ? header.trackno : null}
							</span>
						</h3>
						<h3 className="shipment-table-headers-p">
						<span className="grey-item-container-shipment-arrow">
							{header ? header.formitems[0].notes : null}
						</span>
						</h3>
						<h3 className="shipment-table-headers-h3">
							Shipper : 
							
						</h3>
						<p className="shipment-table-headers-p">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							
							{header ? header.shippersfullname: null}
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							{ header ? header.shippersaddress : null }
						</p>
					</div>
				</Grid>
				<Grid item md={4} sm={13} className="shipment-tabe-headers-middle">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3">
						{ header ? header.date : null }
						</h3>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Origin Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="fontawesome-chrevron"
									color="white"
								/>
								{header ? header.departurecity : null}
							</p>
						</div>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Destination Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="fontawesome-chrevron"
									color="white"
								/>
								{header ? header.arrivalcity : null}
							</p>
						</div>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Product Details :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="fontawesome-chrevron"
									color="white"
								/>
								{header ? header.itemsname : null}
							</p>
						</div>
					</div>
				</Grid>
				<Grid item md={4} sm={13} className="shipment-tabe-headers-right">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-estimated">
							Estimated delivery :
						</h3>
						<p className="shipment-table-headers-info">
							{header ? header.arrivaldate : null}
						</p>
						<p className="shipment-table-headers-info">
							By End of Day
						</p>
						<h3 className="shipment-table-headers-h3">
							Consignee
							{/* {header ? header.fullnames : null} */}
						</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							{ header ? header.consigncompany : null }
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							{ header ? header.consignaddress : null }
						</p>
						<div className="shipment-table-headers-h3-sign">
							<h3 className="shipment-table-headers-h3">Signed for by :</h3>
							<p className="shipment-table-headers-p-sign">
								{ header ? header.collectorfullname : null }
								{/*
									if collected enter [SINGED UP FOR BY NAME OF THE RECEIVER]
								*/}
							</p>
						</div>
					</div>
				</Grid>
			</Grid>
		</Box>
	</>
  );
};

export default ShipmentTableHeader;
