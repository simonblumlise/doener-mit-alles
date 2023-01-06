import { useGetOrder } from "./data/useGetOrder";
import MealCreate from "./MealCreate";
import OrderDisplay from "./OrderDisplay";
import MealDisplay from "./MealDisplay";
import { ReactElement } from "react";
import NewOrderButton from "./NewOrderButton";
import { Grid, Typography } from "@mui/material";

const OrderOverview = (): ReactElement => {
    const { data: order, isLoading, isError, error } = useGetOrder();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError || !order) {
        return <div>
            <NewOrderButton />
            Error {error?.message}
        </div>
    }

    return <div className="App">
        <NewOrderButton />
        <OrderDisplay order={order} />
        <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
                {order.meals.length > 0 && <MealDisplay meals={order.meals} orderId={order.id} />}
            </Grid>
            <Grid item xs={2} />
        </Grid>
        {order.meals.length > 0 && <Typography sx={{ fontWeight: 'bold' }}
                                               mt={2}>Summe: {order.meals.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}€</Typography>}
        <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <MealCreate />
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    </div>;
};

export default OrderOverview;