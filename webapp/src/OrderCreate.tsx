import { ReactElement, useState } from "react";
import { Button, TextField } from "@mui/material";
import { NewDefaultOrder, NewOrder } from "./data/order.types";
import { useCreateOrder } from "./data/useCreateOrder";
import { DateTimePicker } from "@mui/x-date-pickers";

const OrderCreate = (): ReactElement => {
    const [newOrder, setNewOrder] = useState<NewOrder>(NewDefaultOrder);
    const createOrder = useCreateOrder();

    const submit = (e: any) => {
        e.preventDefault();
        createOrder.mutate(newOrder);
    }

    return <form onSubmit={submit}>
        <div>
            <TextField
                size="small"
                label="Bestellende Person"
                variant="standard"
                value={newOrder.owner}
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, owner: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Paypal Link"
                variant="standard"
                value={newOrder.paypalLink}
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, paypalLink: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Restaurant"
                variant="standard"
                value={newOrder.restaurantName}
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, restaurantName: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Link zur Speisekarte"
                variant="standard"
                value={newOrder.restaurantLink}
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, restaurantLink: e.target.value }))}
            />
        </div>
        <div>
            <DateTimePicker
                value={newOrder.orderTime}
                onChange={(e) => e && setNewOrder((prevState) => ({ ...prevState, orderTime: e }))}
                renderInput={(params) => <TextField {...params} />}
                openTo="hours"
                minutesStep={5}
                inputFormat={"DD.MM.YYYY HH:mm"}
                ampm={false}
            />
        </div>
        <Button type="submit" variant="outlined">Bestellung öffnen</Button>
    </form>
}

export default OrderCreate;