import {ReactElement, useState} from "react";
import {Button, TextField} from "@mui/material";
import {newDefaultOrder, NewOrder} from "./data/order.types";

const OrderCreate = (): ReactElement => {
    const [newOrder, setNewOrder] = useState<NewOrder>(newDefaultOrder);

    return <form onSubmit={() => console.log(newOrder)}>
        <div>
            <TextField
                label="Bestellende Person"
                variant="outlined"
                value={newOrder.owner}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, owner: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                label="Paypal Link"
                variant="outlined"
                value={newOrder.paypalLink}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, paypalLink: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                label="Restaurant"
                variant="outlined"
                value={newOrder.restaurantName}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, restaurantName: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                label="Link zur Speisekarte"
                variant="outlined"
                value={newOrder.restaurantLink}
                onChange={(e) => setNewOrder((prevState) => ({...prevState, restaurantLink: e.target.value}))}
            />
        </div>
        <div>
            <TextField
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