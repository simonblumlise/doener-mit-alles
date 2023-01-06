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
        <h2>Neue Bestellung</h2>
        <TextField
            size="small"
            label="Bestellende Person"
            variant="standard"
            value={newOrder.owner}
            margin="dense"
            onChange={(e) => setNewOrder((prevState) => ({ ...prevState, owner: e.target.value }))}
        />
            <TextField
                size="small"
                label="Paypal Link"
                variant="standard"
                value={newOrder.paypalLink}
                margin="dense"
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, paypalLink: e.target.value }))}
            />
            <TextField
                size="small"
                label="Restaurant"
                variant="standard"
                value={newOrder.restaurantName}
                margin="dense"
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, restaurantName: e.target.value }))}
            />
            <TextField
                size="small"
                label="Link zur Speisekarte"
                variant="standard"
                value={newOrder.restaurantLink}
                margin="dense"
                onChange={(e) => setNewOrder((prevState) => ({ ...prevState, restaurantLink: e.target.value }))}
            />
        <DateTimePicker
            value={newOrder.orderTime}
            onChange={(e) => e && setNewOrder((prevState) => ({ ...prevState, orderTime: e }))}
            renderInput={(params) => <TextField {...params} size="small" variant="standard" margin="dense"
                                                label="Bestellzeitpunkt" />}
            openTo="hours"
            minutesStep={5}
            inputFormat={"DD.MM.YYYY HH:mm"}
            ampm={false}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 1.5 }} color="error">Bestellung öffnen</Button>
    </form>
}

export default OrderCreate;