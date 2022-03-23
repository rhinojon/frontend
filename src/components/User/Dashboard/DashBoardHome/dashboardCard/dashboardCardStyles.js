import { makeStyles } from "@mui/styles";

export const dashboardCardsStyles = makeStyles((theme) => ({
	cardToolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingLeft: "15px",
		paddingRight: "15px",
		backgroundColor : theme.palette.secondary.main,
		borderRadius: theme.shape.borderRadius,
		color: "white"
	},
	hashLink:{
		textDecoration: "none"
	},
	contentBox: {
		paddingTop: "20px",
		paddingBottom: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	gutterBottom:{
		color: theme.palette.text.primary,
		marginBottom: "20px",
	},
	iconwrapper: {
		borderRadius: "10%",
		height: "90px !important",
		width: "120px !important",
		marginRight: "10px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "radial-gradient(circle at 100px 20px, #333232, #000)"
	}
}))