import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShipmentBanner from './shipmentBanner/ShipmentBanner'
import TrackType from './shipmentTable/trackType'
import "./shipment.css"

const Shipment = () => {
	return (
		<div className="shipment">
			<Navbar/>
			<div className="shipment-tack-content">
				<ShipmentBanner/>
				<TrackType/>
			</div>
		</div>
	)
}

export default Shipment
