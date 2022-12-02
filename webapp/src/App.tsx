import './App.css'
import OrderCreate from "./OrderCreate";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";


function App() {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
        <OrderCreate/>
    </div>
      </LocalizationProvider>
  )
}

export default App
