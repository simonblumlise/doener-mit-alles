import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderCreate from "./OrderCreate";
import OrderOverview from "./OrderOverview";
import React from "react";
import { Grid } from "@mui/material";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <OrderCreate />,
    },
    {
        path: "/:id",
        element: <OrderOverview />
    }
]);

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <h1>Döner mit Alles</h1>
                        <img src="/dma_icon_1024.png" width="350" />
                        <RouterProvider router={router} />
                    </Grid> <Grid item xs={3}></Grid>
                </Grid>
            </QueryClientProvider>
        </LocalizationProvider>
    )
}

export default App
