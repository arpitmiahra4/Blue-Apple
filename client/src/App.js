import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
   <Box className='App'>
    <Navbar />
    <AllRoutes />
    <Footer />
   </Box>
  );
}

export default App;
