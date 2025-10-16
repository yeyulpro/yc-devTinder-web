import Box from '@mui/material/Box';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Outlet } from 'react-router-dom';
export default function BasePage() {
  return (
    <Box>     
       <Navbar />
      <Outlet />
      <Footer/>
    </Box>
  )
}