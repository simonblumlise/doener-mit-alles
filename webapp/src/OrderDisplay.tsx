import { ReactElement } from "react";
import { Order } from "./data/order.types";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface OrderDisplayProps {
    order: Order;
}

const OrderDisplay = ({ order }: OrderDisplayProps): ReactElement => {
    return (
        <>
            <h3>{`${order.owner} bestellt bei `}
                <a href={order.restaurantLink} target="_blank">{order.restaurantName}</a>
            </h3>
            <a href={order.paypalLink}>Bezahlen: <AttachMoneyIcon /></a>
        </>
    );
};

export default OrderDisplay;