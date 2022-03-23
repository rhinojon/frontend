import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fallback from "./components/utilities/fallback/falllback"
import {
	LazyHome,
	LazyAbout,
	LazyServices,
	LazyProduct,
	LazyContact,
	LazyAuth,
	LazyDashboard,
	LazyShipment,
	LazyQuotation,
	LazyReset,
	LazyLogistics,
	LazyStorage,
	LazyBrokerage,
	LazyAir,
	LazyLinkages,
	LazyAdvisory,
	LazyServiceType,
	LazyOcean,
	LazyRefining,
	LazyProductQuotation,
	LazyServiceQuotation,
	LazyLogisticsQuotation,
	LazyShipmentTable,
	LazyStorageTable,
	LazyNotFound

} from "./components/utilities/lazyroutes"
import { ThemeProvider } from "@mui/styles";
import {theme} from "./theme"


function App() {
	
  return (
		<div className="App">
			<Router>
				{/* <Navbar/> */}
				<ThemeProvider theme={theme}>
					<React.Suspense fallback={<Fallback/>}>
						<Switch>
							<Route path="/" exact component={LazyHome} />
							<Route path="/about" component={LazyAbout} />
							<Route path="/products" component={LazyProduct} />
							<Route path="/services" component={LazyServices} />
							<Route path="/contact" component={LazyContact} />
							<Route path="/auth" component={LazyAuth} />
							<Route path="/dashboard" component={LazyDashboard} />
							<Route path="/shipment" component={LazyShipment} />
							<Route path="/quotation" component={LazyQuotation} />
							<Route path="/reset" component={LazyReset} />
							<Route path="/services-logistics" component={LazyLogistics} />
							<Route path="/services-storage" component={LazyStorage} />
							<Route path="/services-customs" component={LazyBrokerage} />
							<Route path="/services-air" component={LazyAir} />
							<Route path="/services-land" component={LazyLinkages} />
							<Route path="/services-trade" component={LazyAdvisory} />
							<Route path="/service-type" component={LazyServiceType} />
							<Route path="/services-ocean" component={LazyOcean} />
							<Route path="/services-refinery" component={LazyRefining} />
							<Route path="/product-quotation" component={LazyProductQuotation} />
							<Route path="/storage-quotation" component={LazyServiceQuotation} />
							<Route path="/logistics-quotation" component={LazyLogisticsQuotation} />
							<Route path="/track-shipment" component={LazyShipmentTable}/>
							<Route path="/track-storage" component={LazyStorageTable}/>
							<Route component={LazyNotFound} />
						</Switch>
					</React.Suspense>
				</ThemeProvider>
			</Router>
		</div>
  );
}

export default App;
