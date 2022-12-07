import { useGetOrder } from "./data/useGetOrder";
import MealCreate from "./MealCreate";
import OrderDisplay from "./OrderDisplay";
import MealDisplay from "./MealDisplay";
import { ReactElement } from "react";

const OrderOverview = (): ReactElement => {
    const { data: order, isLoading, isError, error } = useGetOrder();

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError || !order) {
        return <div>Error {error?.message}</div>
    }

    return <div className="App">
        <OrderDisplay order={order} />
            {order?.meals.length > 0 && <MealDisplay meals={order.meals} />}
        <MealCreate />
    </div>;
};

export default OrderOverview;