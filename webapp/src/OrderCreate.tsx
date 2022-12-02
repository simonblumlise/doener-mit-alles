import { ReactElement, useState } from "react";
import { Button, TextField } from "@mui/material";
import { NewDefaultOrder, NewOrder } from "./data/order.types";
import { useCreateOrder } from "./data/useCreateOrder";

const OrderCreate = (): ReactElement => {
    const [newOrder, setNewOrder] = useState<NewOrder>(NewDefaultOrder);
    const createOrder = useCreateOrder();

    const submit = (e: any) => {
        e.preventDefault();
        console.log(newOrder);
        createOrder.mutate(newOrder);
    }

    return <form onSubmit={submit}>
        <div>
            <TextField
                size="small"
                label="Bestellende Person"
                variant="standard"
                value={newOrder.owner}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, owner: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Paypal Link"
                variant="standard"
                value={newOrder.paypalLink}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, paypalLink: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Restaurant"
                variant="standard"
                value={newOrder.restaurantName}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, restaurantName: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Link zur Speisekarte"
                variant="standard"
                value={newOrder.restaurantLink}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, restaurantLink: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                size="small"
                variant="standard"
                id="time"
                label="Bestellzeitpunkt"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
                sx={{ width: 150 }}
                value={newOrder.orderTime}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, orderTime: e.target.value}))}
            />
        </div>
        <Button type="submit" variant="outlined">Bestellung öffnen</Button>
    </form>
}

export default OrderCreate;