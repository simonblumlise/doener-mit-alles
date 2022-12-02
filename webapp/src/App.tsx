import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from 'react-query'
import OrderOverview from "./OrderOverview";

const queryClient = new QueryClient()

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
                <OrderOverview />
            </QueryClientProvider>
        </LocalizationProvider>
    )
}

export default App
