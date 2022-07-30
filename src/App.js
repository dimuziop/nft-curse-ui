
import { Box, Stack } from '@mui/material';
import './App.css';
import Main from './main/components/Main.tsx';
import RightBar from './main/components/RightBar.tsx';
import Sidebar from './main/components/Sidebar.tsx';
import NavBar from './main/layout/Navbar.tsx';

function App() {
  return (
    <Box>
      <NavBar> </NavBar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Main />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
