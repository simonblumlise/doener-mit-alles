import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderCreate from "./OrderCreate";
import OrderOverview from "./OrderOverview";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <OrderCreate/>,
    },
    {
        path: "/:id",
        element: <OrderOverview/>
    }
]);

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
                <h1>Döner mit Alles</h1>
                <img src="/dma_icon_1024.png" width="350" />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </LocalizationProvider>
    )
}

export default App
