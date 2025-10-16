import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Navbar from "./app/layout/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'cursive',
  },
});

export default function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </Box>
  );
}
