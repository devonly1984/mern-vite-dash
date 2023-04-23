import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline, ThemeProvider,Box } from "@mui/material";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Dashboard from '@/scenes/dashboard'
const App = () => {
  const theme = useMemo(()=>createTheme(themeSettings),[]);

  return (
    <div className="app">
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
       <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/predictions" element={<div>Prediction Pages</div>}/>
        </Routes>
       </Box>
      </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
