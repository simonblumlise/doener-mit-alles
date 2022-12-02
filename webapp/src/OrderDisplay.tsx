import {ReactElement} from "react";
import OrderCreate from "./OrderCreate";
import {useGetOrder} from "./data/useGetOrder";
import MealCreate from "./MealCreate";

const OrderDisplay = (): ReactElement => {
    const {data: order, isError, error} = useGetOrder();
    return <div className="App">
        {isError ? <OrderCreate/> : <>
            {JSON.stringify(order)}
            <MealCreate/>
        </>}
    </div>;
};

export default OrderDisplay;