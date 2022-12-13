import { ReactElement } from "react";
import { Order } from "./data/order.types";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import dayjs from "dayjs";

interface OrderDisplayProps {
    order: Order;
}

const OrderDisplay = ({ order }: OrderDisplayProps): ReactElement => {
    console.log(order)
    const orderTime = dayjs(order.orderTime)
    return (
        <>
            <h3>{`${order.owner} bestellt am ${orderTime.format("DD.MM.YYYY")} um ${orderTime.format("HH:mm")} bei `}
                <a href={order.restaurantLink} target="_blank">{order.restaurantName}</a>
            </h3>
            <a href={order.paypalLink} target="_blank">Bezahlen: <AttachMoneyIcon /></a>
        </>
    );
};

export default OrderDisplay;