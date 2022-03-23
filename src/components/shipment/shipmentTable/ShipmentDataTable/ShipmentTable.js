import React, { useState, useEffect } from "react";
import "../../shipment.css";
import axios from "axios";
import ShipmentCard from "./ShipmentCard.js";
import Navbar from "../../../Navbar/Navbar";
import { shipping } from "../../../../data/track";

const ShipmentTable = () => {
	const [trackNumber, setTrackNumber] = useState("");
	const [shipment, setShipment] = useState([]);
	const [getOne, setGetOne] = useState()

	// const handleTrackno = (e) => {
	// 	setTrackNumber(e.target.value);
	// };

	const trackItem = (e) => {
		e.preventDefault();
		// axios
		// 	.get(`https://rhinojohnbackend.herokuapp.com/api/logisticsrecords`)
		// 	// .get(`http://localhost:9000/api/shipment/getall/${trackNumber}`)

		// 	.then((res) => {
		// 		setShipment(res.data);
		// 	})
		// 	.catch();
		setShipment(shipping)
	};
	
	const setTracknumber = (e) => {
		e.preventDefault()
		setTrackNumber(e.target.value)
	}

	// useEffect(() => {
	
	// 		axios
	// 			.get(`http://localhost:9000/api/shipment/getone/${trackNumber}`)
	
	// 			.then((res) => {
	// 				setGetOne(res.data);
					
	// 			})
	// 			.catch();
	// }, [trackNumber]);

	// console.log("The shipment is", shipment)

	const result = shipment.find(({ trackno }) => trackno === trackNumber);

	const filterItems = shipment.filter(
		({ trackno }) => trackno === trackNumber
	);

	// console.log("The filtered item is", filterItems)
	// console.log("The result item is", result)

	// console.log(shipment)

	// console.log("shipment data array", shipment);
	return (
		<div className="shipping">
			<Navbar />
				<form onSubmit={trackItem} className="shipping-table-form">
					<input
						type="text"
						placeholder="Insert Track number"
						name="tracknumber"
						onChange={setTracknumber}
						value={trackNumber}
						required
					/>
					<button type="submit"> Search </button>
				</form>
				{/* {console.log("Get one item is", getOne)} */}
			{shipment || shipment !== undefined ? (
				<ShipmentCard
					result={result}
				/>
			) : (
				<div className="shipment-table-content">
					<h1 className="shipment-table-header">Nothin here yet</h1>
					<p className="shipment-table-p"></p>
				</div>
			)}
		</div>
	);
};

export default ShipmentTable;