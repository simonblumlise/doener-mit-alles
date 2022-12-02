import {ReactElement, useState} from "react";
import {Button, TextField} from "@mui/material";
import {newDefaultOrder, NewOrder} from "./order.types";

const OrderCreate = (): ReactElement => {
    const [newOrder, setNewOrder] = useState<NewOrder>(newDefaultOrder);

    return <form>
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
            <TextField label="Bestellzeitpunkt" variant="outlined" />
        </div>
        <Button variant="outlined">Bestellung öffnen</Button>
    </form>
}

export default OrderCreate;