import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { MdMenu } from "react-icons/md"
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
import { GrClose } from "react-icons/gr";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';
// import VisibleItemList from '../containers/VisibleItemList'
import DashboardHome from "../DashBoardHome/DashboardHome";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	closeMenuButton: {
		marginRight: 'auto',
		marginLeft: 0,
	},
}));
function ResponsiveDrawer() {
	const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	
	function handleDrawerToggle() {
			setMobileOpen(!mobileOpen)
		}
	const drawer = (
			<div>
				<List>
					{dummyCategories.map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		);
	return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MdMenu />
						</IconButton>
						<Typography variant="h6" noWrap>
							Responsive drawer
						</Typography>
					</Toolbar>
				</AppBar>
				
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							<IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
								<GrClose/>
							</IconButton>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							className={classes.drawer}
							variant="permanent"
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<div className={classes.toolbar} />
							{drawer}
						</Drawer>  
					</Hidden>
				</nav>
				<div className={classes.content}>
					<div className={classes.toolbar} />
					{/* <VisibleItemList /> */}
					<DashboardHome/>
				</div>
			</div>
		);
	}
ResponsiveDrawer.propTypes = {
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
};
export default ResponsiveDrawer;