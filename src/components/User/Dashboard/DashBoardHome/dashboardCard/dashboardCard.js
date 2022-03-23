import { Box, Paper, Toolbar, Typography } from "@mui/material"
import React from 'react'
import { dashboardCardsStyles } from "./dashboardCardStyles"
import * as design from "@mui/styles"
import { HashLink } from "react-router-hash-link"



const DashboardCard = ({ icon, title, text, path }) => {

	// console.log(design)
	const classes = dashboardCardsStyles()

	return (
		<Paper className={classes.cardToolbar} elevation={3}>
			<HashLink className={classes.hashLink} to={path}>
				<Box className={classes.cardToolbar}>
					<Box className={classes.iconwrapper}>
						<Typography variant="h3">
							i
						</Typography>
					</Box>
					<Box className={classes.contentBox}>
						<Typography variant="h5">
							{title}
						</Typography>
						<Typography className={classes.gutterBottom} paragraph variant="body">
							{text}
						</Typography>
					</Box>
				</Box>
			</HashLink>
		</Paper>
	)
}

export default DashboardCard