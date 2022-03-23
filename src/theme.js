import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: {
			main: "rgba(14,15,14,255)",
		},
		secondary: {
			main: "#333333",
		},
		background: {
			default: "#212021"
		},
		text: {
			primary: "#969596",
			light: "#fff"
		}
	},
	shape: {
		borderRadius: 4
	}
});