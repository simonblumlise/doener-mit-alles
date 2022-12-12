import { useGetOrder } from "./data/useGetOrder";
import MealCreate from "./MealCreate";
import OrderDisplay from "./OrderDisplay";
import MealDisplay from "./MealDisplay";
import { ReactElement } from "react";
import NewOrderButton from "./NewOrderButton";

const OrderOverview = (): ReactElement => {
    const { data: order, isLoading, isError, error } = useGetOrder();

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError || !order) {
        return <div>
            <NewOrderButton />
            Error {error?.message}
        </div>
    }

    return <div className="App">
        <NewOrderButton />
        <OrderDisplay order={order} />
            {order?.meals.length > 0 && <MealDisplay meals={order.meals} orderId={order.id} />}
        <MealCreate />
    </div>;
};

export default OrderOverview;