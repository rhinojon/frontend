import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import "../LogisticsForms.css";
import axios from "axios";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const logisticsFormStyles = makeStyles({
	wrapper: {
		width: "80vw",
		marginLeft: "18vw"
	}
})

// .of(
// 	Yup.object().shape({
// 		fullnames: Yup.string().required().min(3).max(100),
// 		email: Yup.string().required().min(3).max(100),
// 		company: Yup.string().required().min(3).max(100),
// 		shipaddress: Yup.string().required().min(3).max(100),
// 		consignfullnames: Yup.string().required().min(3).max(100),
// 		consignemail: Yup.string().required().min(3).max(100),
// 		consigncompany: Yup.string().required().min(3).max(100),
// 		consignaddress: Yup.string().required().min(3).max(100),
// 		departurecity: Yup.string().required().min(3).max(50),
// 		departurecountry: Yup.string().required().min(3).max(50),
// 		arrivalcity: Yup.string().required().min(3).max(50),
// 		arrivalcountry: Yup.string().required().min(3).max(50),
// 		logisticstype: Yup.string().required().min(3).max(50),
// 		weight: Yup.number().required().min(1).max(50000000),
// 		weightunit: Yup.string().required().min(1).max(50),
// 		producttype: Yup.string().required().min(3).max(50),
// 		pieces: Yup.number().required().min(1).max(50000000),
// 		departuredate: Yup.string().required().min(3).max(100),
// 		departuretime: Yup.string().required().min(3).max(100),
// 		arrivaldate: Yup.string().required().min(3).max(100),
// 		quality: Yup.string().required().min(3).max(100),
// 		product: Yup.string().required().min(3).max(100),
// 		notes: Yup.string().required().min(20).max(2000),
// 		idno: Yup.string().required().min(5).max(30),
// 		unit: Yup.string().required().min(2).max(100),
// 		timeevents: Yup.string().min(4).max(10).required(),
// 		arrivaltime: Yup.string().min(5).max(30),
// 		collectoraddress: Yup.string().min(3).max(100),
// 		collectortel: Yup.string().min(3).max(100),
// 		collectedby: Yup.string().min(3).max(100),
// 		currentlocation: Yup.string().min(3).max(100),
// 		currentdate: Yup.string().min(3).max(100),
// 		status: Yup.string().min(3).max(100).required(),
// 		completed: Yup.boolean().oneOf([true, false]),
// 	})
// )

// formData: [{
// 	fullnames: "",
// 	email: "",
// 	company: "",
// 	shipaddress: "",
// 	consignfullnames: "",
// 	consignemail: "",
// 	consigncompany: "",
// 	consignaddress: "",
// 	departurecity: "",
// 	departurecountry: "",
// 	arrivalcity: "",
// 	arrivalcountry: "",
// 	logisticstype: "",
// 	weight: "",
// 	weightunit: "",
// 	producttype: "",
// 	pieces: "",
// 	departuredate: "",
// 	departuretime: "",
// 	arrivaldate: "",
// 	quality: "",
// 	notes: "",
// 	idno: "",
// 	unit: "",
// 	arrivaltime: "",
// 	timeevents: "",
// 	collectedby: "",
// 	collectoraddress: "",
// 	collectortel: "",
// 	completed: "",
// 	currentlocation: "",
// 	currentdate: "",
// 	status: "",
// 	product: "",
// }]


const LogisticsFormsContent = ({setModalIsOpen}) => {
	const [error, setErrors] = useState("");
	
	
	const formik = useFormik({
		initialValues: {
			itemtrackno: "",
			formData: [{
				shippersfirstname: "",
				shipperslastname: "",
				shippersemail: "",
				shippersidno: "",
				shipperstelephone: "",
				shipperscompany: "",
				shippersaddress: "",
				consignfirstname: "",
				consignlastname: "",
				consigntelephone: "",
				consignemail: "",
				consigncompany: "",
				consignaddress: "",
				cosignidno: "",
				departurecity: "",
				departurecountry: "",
				departuredate: "",
				departuretime: "",
				arrivalcity: "",
				arrivalcountry: "",
				arrivaltime: "",
				arrivaldate: "",
				logisticstype: "",
				itemsweight: "",
				itemsweightunit: "",
				itemsproducttype: "",
				itemspieces: "",
				itemsquality: "",
				timeevents: "",
				dateevents: "",
				quantifiableunit: "",
				collectorfirstname: "",
				collectorlastname: "",
				itemsname: "",
				currentlocation: "",
			}]
		},
		validationSchema: Yup.object().shape({
			itemtrackno: Yup.string().required().min(3).max(100),
			formData: Yup.array()

		}),
		onSubmit: (values, { resetForm }) => {
			try {
				axios
					.post(
						// "https://rhinojohnbackend.herokuapp.com/api/logisticsrecords",
						"http://localhost:9000/api/shipment/post",
						values
					)
					.then((res) => {
						console.log(res, "this is the res data");
					})
					.catch((err) => {
						console.log(err, "this is the error data");
						// setErrors(err.response.data.message);
					});
				alert(JSON.stringify(values, null, 2));
				// console.log(values);
				resetForm({ values: "" });
			} catch (err) {
				console.log("The ctch error is", err);
			}
		},
	});

	const classes = logisticsFormStyles()

	return (
		<Box clasName={classes.wrapper}>
				<div className="logistics-quotation-form">

				<div className="logistics-quotation-form-content">
					<form
						onSubmit={formik.handleSubmit}
						className="the-logistics-quotation-form">
						{error ? (
							<div className="service-quotation-small-inputs">
								<div className="error-section">
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										size="2x"
									/>
									<p className="error-section-p">{error}</p>
								</div>
							</div>
						) : null}
						<div className="logistics-quotation-small-inputs">
							<div className="logistics-quotation-small-input-group">
								<label>Shipperfullnames</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Shipper fullnames"
									name="fullnames"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.fullnames}
									required
								/>
								{formik.touched.fullnames &&
								formik.errors.fullnames ? (
									<div className="error">
										{formik.errors.fullnames}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Shipper email</label>
								<input
									className="logistics-input-fields"
									type="email"
									placeholder="Shipper email"
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									required
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="error">
										{formik.errors.email}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Shipper Company</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Shipper Company"
									name="company"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.company}
									required
								/>
								{formik.touched.company && formik.errors.company ? (
									<div className="error">
										{formik.errors.company}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Shipper Address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Shipper Address"
									name="shipaddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shipaddress}
									required
								/>
								{formik.touched.shipaddress &&
								formik.errors.shipaddress ? (
									<div className="error">
										{formik.errors.shipaddress}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Consignee ullnames</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Consignee fullnames"
									name="consignfullnames"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignfullnames}
									required
								/>
								{formik.touched.consignfullnames &&
								formik.errors.consignfullnames ? (
									<div className="error">
										{formik.errors.consignfullnames}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Email</label>
								<input
									className="logistics-input-fields"
									type="email"
									placeholder="Consignee Email"
									name="consignemail"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignemail}
									required
								/>
								{formik.touched.consignemail &&
								formik.errors.consignemail ? (
									<div className="error">
										{formik.errors.consignemail}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Consignee company</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Consignee company<"
									name="consigncompany"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consigncompany}
									required
								/>
								{formik.touched.consigncompany &&
								formik.errors.consigncompany ? (
									<div className="error">
										{formik.errors.consigncompany}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Consignee address here..."
									name="consignaddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignaddress}
									required
								/>
								{formik.touched.consignaddress &&
								formik.errors.consignaddress ? (
									<div className="error">
										{formik.errors.consignaddress}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Weight unit</label>
								<select
									type="text"
									name="weightunit"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.weightunit}
									required>
									<option
										value=""
										disabled
										label="Please select an option"
									/>
									<option value="kg" label="Kilograms" />
									<option value="t" label="Tonnes" />
									<option value="lb" label="pounds" />
									<option value="g" label="grams" />
									<option value="l" label="Liters" />
									<option value="gal" label="Gallons" />
								</select>
								{formik.touched.weightunit &&
								formik.errors.weightunit ? (
									<div className="error">
										{formik.errors.weightunit}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Weight</label>
								<input
									className="logistics-input-fields"
									type="number"
									placeholder="The weight of the item..."
									name="weight"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.weight}
									required
								/>
								{formik.touched.weight && formik.errors.weight ? (
									<div className="error">
										{formik.errors.weight}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Product Type</label>
								<select
									type="text"
									name="producttype"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.producttype}
									required>
									<option
										value=""
										disabled
										label="Please select an option"
									/>
									<option
										value="solid"
										label="Solid"
										defaultValue
									/>
									<option value="liquid" label="Liquid" />
									<option value="gas" label="Gas" />
								</select>
								{formik.touched.producttype &&
								formik.errors.producttype ? (
									<div className="error">
										{formik.errors.producttype}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Departure city</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your city..."
									name="departurecity"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departurecity}
									required
								/>
								{formik.touched.departurecity &&
								formik.errors.departurecity ? (
									<div className="error">
										{formik.errors.departurecity}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Departure country</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your country..."
									name="departurecountry"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departurecountry}
									required
								/>
								{formik.touched.departurecountry &&
								formik.errors.departurecountry ? (
									<div className="error">
										{formik.errors.departurecountry}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival city</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your city..."
									name="arrivalcity"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivalcity}
									required
								/>
								{formik.touched.arrivalcity &&
								formik.errors.arrivalcity ? (
									<div className="error">
										{formik.errors.arrivalcity}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival country</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your country..."
									name="arrivalcountry"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivalcountry}
									required
								/>
								{formik.touched.arrivalcountry &&
								formik.errors.arrivalcountry ? (
									<div className="error">
										{formik.errors.arrivalcountry}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>ID number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Your ID number..."
									name="idno"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.idno}
									required
								/>
								{formik.touched.idno && formik.errors.idno ? (
									<div className="error">
										{formik.errors.idno}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label> Pieces </label>
								<input
									className="logistics-input-fields"
									type="number"
									placeholder="pieces"
									name="pieces"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.pieces}
									required
								/>
								{formik.touched.pieces && formik.errors.pieces ? (
									<div className="error">
										{formik.errors.pieces}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Departure date</label>
								<input
									className="logistics-input-fields"
									type="date"
									placeholder="DEparture date..."
									name="departuredate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departuredate}
									required
								/>
								{formik.touched.departuredate &&
								formik.errors.departuredate ? (
									<div className="error">
										{formik.errors.departuredate}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Time in</label>
								<input
									className="logistics-input-fields"
									type="time"
									placeholder="Time in..."
									name="departuretime"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departuretime}
									required
								/>
								{formik.touched.departuretime &&
								formik.errors.departuretime ? (
									<div className="error">
										{formik.errors.departuretime}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Logistics mode</label>
								<select
									type="text"
									name="logisticstype"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.logisticstype}
									required>
									<option
										value=""
										disabled
										label="Please select an option"
									/>
									<option
										value="land"
										label="Land"
										defaultValue
									/>
									<option value="sea" label="Sea" />
									<option value="air" label="Air" />
								</select>
								{formik.touched.logisticstype &&
								formik.errors.logisticstype ? (
									<div className="error">
										{formik.errors.logisticstype}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival date</label>
								<input
									className="logistics-input-fields"
									type="date"
									placeholder="Arrival date..."
									name="arrivaldate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivaldate}
									required
								/>
								{formik.touched.arrivaldate &&
								formik.errors.arrivaldate ? (
									<div className="error">
										{formik.errors.arrivaldate}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Comodity quality</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Comodity quality..."
									name="quality"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.quality}
									required
								/>
								{formik.touched.quality && formik.errors.quality ? (
									<div className="error">
										{formik.errors.quality}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Track number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Track number"
									name="itemtrackno"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemtrackno}
									required
								/>
								{formik.touched.itemtrackno && formik.errors.itemtrackno ? (
									<div className="error">
										{formik.errors.itemtrackno}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival time</label>
								<input
									className="logistics-input-fields"
									type="time"
									placeholder="Arrival time, If not arrived leave blank"
									name="arrivaltime"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivaltime}
								/>
								{formik.touched.arrivaltime &&
								formik.errors.arrivaltime ? (
									<div className="error">
										{formik.errors.arrivaltime}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Time events</label>
								<input
									className="logistics-input-fields"
									type="time"
									placeholder="Time events"
									name="timeevents"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.timeevents}
									required
								/>
								{formik.touched.timeevents &&
								formik.errors.timeevents ? (
									<div className="error">
										{formik.errors.timeevents}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Unit</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Unit eg bags"
									name="unit"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.unit}
									required
								/>
								{formik.touched.unit && formik.errors.unit ? (
									<div className="error">
										{formik.errors.unit}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collected by</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Colledted by"
									name="collectedby"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectedby}
									required
								/>
								{formik.touched.collectedby &&
								formik.errors.collectedby ? (
									<div className="error">
										{formik.errors.collectedby}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collector's phone number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Collector's phone number"
									name="collectortel"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectortel}
									required
								/>
								{formik.touched.collectortel &&
								formik.errors.collectortel ? (
									<div className="error">
										{formik.errors.collectortel}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collector's address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Collector's address"
									name="collectoraddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectoraddress}
									required
								/>
								{formik.touched.collectoraddress &&
								formik.errors.collectoraddress ? (
									<div className="error">
										{formik.errors.collectoraddress}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Product</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Product item"
									name="product"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.product}
									required
								/>
								{formik.touched.product && formik.errors.product ? (
									<div className="error">
										{formik.errors.product}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Status</label>
								<select
									type="text"
									name="status"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.status}
									required>
									<option
										value=""
										disabled
										label="Please select an option"
									/>
									<option
										value="pending"
										label="pending"
										defaultValue
									/>
									<option value="success" label="Success" />
									<option value="failed" label="failed" />
								</select>
								{formik.touched.status && formik.errors.status ? (
									<div className="error">
										{formik.errors.status}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Is logistics completed</label>
								<input
									className="logistics-input-fields"
									type="checkbox"
									placeholder="Arrival time, If not arrived leave blank"
									name="completed"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.completed}
								/>
								{formik.touched.completed &&
								formik.errors.completed ? (
									<div className="error">
										{formik.errors.completed}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Current location</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Current location"
									name="currentlocation"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.currentlocation}
									required
								/>
								{formik.touched.currentlocation &&
								formik.errors.currentlocation ? (
									<div className="error">
										{formik.errors.currentlocation}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Current date</label>
								<input
									className="logistics-input-fields"
									type="date"
									placeholder="Current location"
									name="currentdate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.currentdate}
									required
								/>
								{formik.touched.currentdate &&
								formik.errors.currentdate ? (
									<div className="error">
										{formik.errors.currentdate}
									</div>
								) : null}
							</div>
						</div>

						<div className="contact-textarea">
							<label>Notes</label>
							<textarea
								type="text"
								name="notes"
								placeholder="Little notess eg weight, size, color, etc"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.notes}
								required
							/>
							{formik.touched.notes && formik.errors.notes ? (
								<div className="error">{formik.errors.notes}</div>
							) : null}
						</div>

						<br />
						<button type="submit">
							Submit <FontAwesomeIcon icon={faPaperPlane} />
						</button>
						<button type="submit" onClick={() => setModalIsOpen(false)}>
							Close 
						</button>
					</form>
				</div>
			</div>
		</Box>
	);
};

export default LogisticsFormsContent;
