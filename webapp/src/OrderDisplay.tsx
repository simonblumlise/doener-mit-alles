import { ReactElement } from "react";
import { Order } from "./data/order.types";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

interface OrderDisplayProps {
    order: Order;
}

const OrderDisplay = ({ order }: OrderDisplayProps): ReactElement => {
    const orderTime = dayjs(order.orderTime)
    return (
        <>
            <h3>{`${order.owner} bestellt am ${orderTime.format("DD.MM.YYYY")} um ${orderTime.utc(true).local().format("HH:mm")} bei `}
                <a href={order.restaurantLink} target="_blank">{order.restaurantName}</a>
            </h3>
            <a href={'//' + order.paypalLink} target="_blank"><img src="/paypal.jpeg" /> </a>
        </>
    );
};

export default OrderDisplay;