import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import "./adminstoragetable.css";
import { DataGrid} from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import UpdateStorage from "./updateStorage/updateStorage";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import StorageEditForms from "../UserForms/StorageEditForms/StorageEditForms";
import StorageEditFormsContent from "../UserForms/StorageEditForms/StorageEditFormContent/StorageEditFormsContent";

const AdminStorageTable = () => {
	const [adminStorage, setAdminStorage] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [storageItem, setStorageItem] = useState({});
	const [storageTracked, setStorageTracked] = useState({})
	const [rowId, setRowID] = useState("")

	useEffect(() => {
		axios
			.get(`https://rhinojohnbackend.herokuapp.com/api/storageshipment`)
			.then((res) => {
				setAdminStorage(res.data);
			})
			.catch((err) => console.log(err));
		}, []);
		
	const updateHandler = (cellvalues) => {
		setModalIsOpen(true)
		// setStorageItem(cellvalues)
		// console.log("The item row is", storageItem)
	}
	
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
		}
	}))


	const classes = tableStyles()

	  const columns =  [
		{ 
			field: "id", hide: true 
		},
		{ 
			field: "fullnames", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Fullname", 
			width: 150, 
		},
		{ 
			field: "trackno", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Track number", 
			width: 150, 
		},
		{ 
			field: "email", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Email", 
			width: 150, 
		},
		{ 
			field: "collectedby", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Collector's fullname", 
			width: 150, 
		},
		{ 
			field: "collectoraddress", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Collector's Telephone", 
			width: 150, 
		},
		{ 
			field: "collectortel", 
			align:"left", headerAlign: "left", 
			headerName: "Collector's Address", 
			width: 150, 
		},
		{ 
			field: "intime", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Time in", 
			width: 150, 
		},
		{ 
			field: "datein", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Date in", 
			width: 150, 
		},
		{ 
			field: "storagecity", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Stored city", 
			width: 150, 
		},
		{ 
			field: "storagecountry", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Stored country", 
			width: 150, 
		},
		{ 
			field: "warehousetype", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Warehouse type", 
			width: 150, 
		},
		{ 
			field: "weight", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Weight", 
			width: 150, 
		},
		{ 
			field: "weightunit", 
			align:"left", 
			headerAlign: "left", 
			headerName: "unit", 
			width: 150, 
		},
		{ 
			field: "notes", 
			align:"left", 
			headerAlign: "left", 
			headerName: "Notes", 
			width: 250, 
		},
		{
			field: "update",
			align:"left",
			headerAlign: "left",
			headerName: "Update",
			width: 100,
			renderCell: (cellValues, item) => {
				return (
					<>
						<Button onClick={(cellValues) => updateHandler(cellValues)} variant="contained" color="primary">
							{setStorageItem(cellValues.row)}
							update
							
							{/* {console.log("The cellvalues from the update button is", cellValues.id)} */}
						</Button>
					</>
				)
			}
		},
		{
			field: "delete",
			align:"left",
			headerAlign: "left",
			headerName: "delete",
			renderCell: (cellValues) => {
				return (
					<Button pl={2} variant="contained" >
						delete
						{/* {console.log("The cellvalues from the button is", cellValues)} */}
					</Button>
				)
			}
		},
	  ];

	return (
		<div className="admin-storage-table">
			<div className="admin-storage-table-content">
					{/* {console.log("The storage item state is", storageItem)} */}
			<div style={{ width: '100%' }}>
					{
						adminStorage && (
							<DataGrid
								rows={adminStorage}
								columns={columns}
								autoPageSize
								getRowId={(logistics) => logistics._id }
								autoHeight
								headerHeight={60}
								pageSize={100}
								className={classes.root}
								onRowClick={(data) => {
									axios
										.get(`https://rhinojohnbackend.herokuapp.com/api/storageshipment/${data.id}`)
										.then((res) => {
											console.log("The single itens value",res.data)
											setStorageTracked(res.data)
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
							>
							</DataGrid>
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
						<Paper>
							<Box color="primary">
								<Typography variant="h3" color="primary" >
									Updating storage trackitem : {storageTracked.trackno} 
									
								</Typography>
							</Box>
						</Paper>
						<Box>
							<StorageEditFormsContent item={storageTracked} setModalIsOpen = {setModalIsOpen}/>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default AdminStorageTable;
