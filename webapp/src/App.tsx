import './App.css'
import OrderCreate from "./OrderCreate";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from 'react-query'
import {useGetOrder} from "./data/useGetOrder";
import OrderDisplay from "./OrderDisplay";

const queryClient = new QueryClient()
function App() {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <QueryClientProvider client={queryClient}>
        <OrderDisplay/>
        </QueryClientProvider>
      </LocalizationProvider>
  )
}

export default App
