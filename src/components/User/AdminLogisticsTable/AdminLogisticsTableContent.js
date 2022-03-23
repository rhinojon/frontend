
import "./adminlogisticstable.css"
import axios from "axios"
import { DataGrid} from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Modal from "react-modal";
import LogisticsFormsContent from "../UserForms/LogisticsForms/LogisticsFormsContent/LogisticsFormsContent";
// import { Link } from 'react-router-dom'

const AdminLogisticsTableContent = ({data, length, logistics}) => {

	const [shipmentTable, setShipmentTable] = useState()
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [logisticsItem, setLogisticsItems] = useState({})

	const tableStyles = makeStyles(theme => ({
		root: {
			"& .MuiDataGrid-columnHeaders": {
				backgroundColor: theme.palette.primary.main,
				color: "whitesmoke",
				fontSize: 18,
				borderTopLeftRadius: 4,
				borderTopRightRadius: 4,
				paddingTop: 2,
				paddingBottom: 2
			  },
			"& .MuiDataGrid-virtualScrollerRenderZone": {
				"& .MuiDataGrid-row": {
				  "&:nth-child(2n)": { backgroundColor: "#333333" }
				}
			  }
		},
		modalStyles : {
			borderRadius: 4,
			padding: 2
		}
	}))

	const classes = tableStyles()

	  const columns =  [
		{ field: "id", hide: true },
		{ field: "fullnames", align:"left", headerAlign: "left", headerName: "Fullname", width: 150 },
		{ field: "idno", align:"left", headerAlign: "left", headerName: "ID Number", width: 150 },
		{ field: "trackno", align:"left", headerAlign: "left", headerName: "Track number", width: 150 },
		{ field: "product", align:"left", headerAlign: "left", headerName: "Product Name", width: 150 },
		{ field: "producttype", align:"left", headerAlign: "left", headerName: "Product State", width: 150 },
		{ field: "timeevents", align:"left", headerAlign: "left", headerName: "Timed at", width: 150 },
		{ field: "currentlocation", align:"left", headerAlign: "left", headerName: "Currently at", width: 150 },
		{ field: "pieces", align:"left", headerAlign: "left", headerName: "Product Quantity", width: 150 },
		{ field: "weight", align:"left", headerAlign: "left", headerName: "Weight", width: 150 },
		{ field: "weightunit", align:"left", headerAlign: "left", headerName: "Weight Unit", width: 150 },
		{ field: "departurecountry", align:"left", headerAlign: "left", headerName: "Country of departure", width: 180 },
		{ field: "departurecity", align:"left", headerAlign: "left", headerName: "City of departure", width: 180 },
		{ field: "departuredate", align:"left", headerAlign: "left", headerName: "Departure date", width: 150 },
		{ field: "departuretime", align:"left", headerAlign: "left", headerName: "Departure time", width: 150 },
		{ field: "arrivalcountry", align:"left", headerAlign: "left", headerName: "Destination Country", width: 150 },
		{ field: "arrivalcity", align:"left", headerAlign: "left", headerName: "Destination City", width: 150 },
		{ field: "arrivaldate", align:"left", headerAlign: "left", headerName: "Arrival date", width: 150 },
		{ field: "arrivaltime", align:"left", headerAlign: "left", headerName: "Arrival time", width: 150 },
		{ field: "notes", align:"left", headerAlign: "left", headerName: "Departure time", width: 250 },
		{ field: "status", align:"left", headerAlign: "left", headerName: "Status", width: 250 },
		{
			field: "update",
			width: 100,
			align:"left",
			headerAlign: "left",
			headerName: "Update",
			renderCell: (cellValues) => {
				return (
					<>
						<Button onClick={() => setModalIsOpen(true)} variant="contained" color="primary">
							update
						</Button>
					</>
				)
			}
		},
		{
			field: "delete",
			width: 100,
			align:"left",
			headerAlign: "left",
			headerName: "delete",
			renderCell: (cellValues) => {
				return (
					<Button pl={2} variant="contained" >
						delete
					</Button>
				)
			}
		},
	  ];
	  
	return (


			<div style={{ width: '100%' }}>
				{
					logistics && (
						<DataGrid
							rows={logistics}
							columns={columns}
							autoPageSize
							getRowId={(logistics) => logistics._id }
							autoHeight
							headerHeight={60}
							pageSize={100}
							className={classes.root}
							onRowClick={(data) => {
								axios
									.get(`https://rhinojohnbackend.herokuapp.com/api/logisticsrecords/${data.id}`)
									.then((res) => {
										console.log("The single logistics itens value",res.data)
										setLogisticsItems(res.data)
									})
									.catch((err) => console.log(err));
							}}
							sx={{
								boxShadow: 2,
								border: 0,
								borderColor: 'primary.main',
								'& .MuiDataGrid-cell:hover': {
								  color: 'primary.main',
								},
								color: "whitesmoke"
							  }}
						/>
					)
				}
						<Modal
						style={{
							overlay: {
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(33, 32, 33, 0.6)'
							},
							content: {
							position: 'absolute',
							top: '40px',
							left: '40px',
							right: '40px',
							bottom: '40px',
							border: '1px solid #ccc',
							background: '#212021',
							overflow: 'auto',
							WebkitOverflowScrolling: 'touch',
							borderRadius: '4px',
							outline: 'none',
							padding: '20px'
							}
						}}
						isOpen={modalIsOpen}
						onRequestClose={() => setModalIsOpen(false)}
						aria={{
							labelledby: "heading",
							describedby: "full_description"
						}}>
						
							<Box 
								  sx={{
									borderRadius: 2,
									padding: 2,
									backgroundColor: 'primary.main',
									'&:hover': {
										backgroundColor: 'primary.main',
										opacity: [0.9, 0.8, 0.7],
									},
								  }}
								  className
							>
								<Typography variant="h3" color="primary" >
									Updating shipping tracking no: {logisticsItem.trackno}
								</Typography>
							</Box>
						
						<Box>
							<LogisticsFormsContent setModalIsOpen = {setModalIsOpen}/>
						</Box>
					</Modal>
			</div>

	)
}

export default AdminLogisticsTableContent
