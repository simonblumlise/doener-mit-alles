import OrderCreate from "./OrderCreate";
import { useGetOrder } from "./data/useGetOrder";
import MealCreate from "./MealCreate";
import OrderDisplay from "./OrderDisplay";
import MealDisplay from "./MealDisplay";
import { ReactElement } from "react";

const OrderOverview = (): ReactElement => {
    const { data: order } = useGetOrder();
    return <div className="App">
        {!order ? <OrderCreate /> : <>
            <OrderDisplay order={order} />
            {order?.meals.length > 0 && <MealDisplay meals={order.meals} />}
            <MealCreate />
        </>}
    </div>;
};

export default OrderOverview;