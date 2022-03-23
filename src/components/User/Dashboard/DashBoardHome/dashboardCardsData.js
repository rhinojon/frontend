import { BsTruck, BsInfoLg, BsTable} from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";

const iconstyle = { color: "white", fontSize: "1.5em" }

export const dashboardHorizontalCards = [
	{
		id:1,
		path: "/dashboard/generalenquiries#product-enquiries",
		icon: <BsInfoLg/>,
		title: "General enquiries",
		text: "The record of all general enquiries in this year"
	},
	{
		id:2,
		path: "/dashboard/productquotation#product-quotation",
		icon: <GrDiamond color="white"/>,
		title: "Product Quotation",
		text: "The record of all product quotation enquiries in this year"
	},
	{
		id:3,
		path: "/dashboard/storagequotation#storage-quotation",
		icon: <FaWarehouse/>,
		title: "Storage quotation",
		text: "The record of all storage quotation enquiries in this year"
	},
	{
		id:4,
		path: "/dashboard/shipmentquotation#shipment-quotation",
		icon: <BsTruck/>,
		title: "Shipping quotation",
		text: "The record of all shipping quotation enquiries in this year"
	},
	{
		id:5,
		path: "/dashboard/shipmenttable#shipment-table",
		icon: <BsTable/>,
		title: "Shipped Items",
		text: "The record of all items shipped this year"
	},
	{
		id:6,
		path: "/dashboard/storagetable#storage-table",
		icon: <BsTable/>,
		title: "Stored Items",
		text: "The record of all items stored in our warehouse this year"
	},
]